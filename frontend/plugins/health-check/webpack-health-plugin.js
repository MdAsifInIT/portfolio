// webpack-health-plugin.js
// Webpack plugin that tracks compilation state and health metrics

class WebpackHealthPlugin {
  constructor() {
    this.status = {
      state: 'idle',           // idle, compiling, success, failed
      errors: [],
      warnings: [],
      lastCompileTime: null,
      lastSuccessTime: null,
      compileDuration: 0,
      totalCompiles: 0,
      firstCompileTime: null,
    };
  }

  apply(compiler) {
    const pluginName = 'WebpackHealthPlugin';

    // Hook: Compilation started
    compiler.hooks.compile.tap(pluginName, () => {
      const now = Date.now();
      this.status.state = 'compiling';
      this.status.lastCompileTime = now;

      if (!this.status.firstCompileTime) {
        this.status.firstCompileTime = now;
      }
    });

    // Hook: Compilation completed
    compiler.hooks.done.tap(pluginName, (stats) => {
      const info = stats.toJson({
        all: false,
        errors: true,
        warnings: true,
      });
      const now = Date.now();
      const errors = Array.isArray(info.errors) ? info.errors : [];
      const warnings = Array.isArray(info.warnings) ? info.warnings : [];

      this.status.totalCompiles++;
      this.status.compileDuration = this.status.lastCompileTime
        ? now - this.status.lastCompileTime
        : 0;

      if (stats.hasErrors()) {
        this.status.state = 'failed';
        this.status.errors = errors.map(err => ({
          message: err.message || String(err),
          stack: err.stack,
          moduleName: err.moduleName,
          loc: err.loc,
        }));
      } else {
        this.status.state = 'success';
        this.status.lastSuccessTime = now;
        this.status.errors = [];
      }

      if (stats.hasWarnings()) {
        this.status.warnings = warnings.map(warn => ({
          message: warn.message || String(warn),
          moduleName: warn.moduleName,
          loc: warn.loc,
        }));
      } else {
        this.status.warnings = [];
      }
    });

    // Hook: Compilation failed
    compiler.hooks.failed.tap(pluginName, (error) => {
      this.status.state = 'failed';
      this.status.errors = [{
        message: error?.message || String(error),
        stack: error?.stack,
      }];
      this.status.compileDuration = this.status.lastCompileTime
        ? Date.now() - this.status.lastCompileTime
        : 0;
    });

    // Hook: Invalid (file changed, recompiling)
    compiler.hooks.invalid.tap(pluginName, () => {
      this.status.state = 'compiling';
    });
  }

  getStatus() {
    return {
      ...this.status,
      // Add computed fields
      isHealthy: this.status.state === 'success',
      errorCount: Array.isArray(this.status.errors) ? this.status.errors.length : 0,
      warningCount: Array.isArray(this.status.warnings) ? this.status.warnings.length : 0,
      hasCompiled: this.status.totalCompiles > 0,
    };
  }

  // Get simplified status for quick checks
  getSimpleStatus() {
    return {
      state: this.status.state,
      isHealthy: this.status.state === 'success',
      errorCount: Array.isArray(this.status.errors) ? this.status.errors.length : 0,
      warningCount: Array.isArray(this.status.warnings) ? this.status.warnings.length : 0,
    };
  }

  // Reset statistics (useful for testing)
  reset() {
    this.status = {
      state: 'idle',
      errors: [],
      warnings: [],
      lastCompileTime: null,
      lastSuccessTime: null,
      compileDuration: 0,
      totalCompiles: 0,
      firstCompileTime: null,
    };
  }
}

module.exports = WebpackHealthPlugin;
