# grunt-jse

> Generator for JSE

Currently, it can generate the module class file, the test spec for
jasmine and the import for the test

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jse --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jse');
```

## The "jse" task

### Overview
In your project's Gruntfile, add a section named `jse` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jse: {
    options: {
			srcDir: 'Web Content/maf/jse',
			specDir: 'test/spec'
    },
    default: {}
  },
})
```

### Options

#### options.srcDir
Type: `String`
Default value: `'src'`

A string value that is used as a base path for the src directory of the
JSE modules.

#### options.specDir
Type: `String`
Default value: `'test/spec'`

A string value that is used as a base path for the jasmine spec directory of the JSE modules.


## Usage Examples

### Default Options
In this exemple, we generate files for the class named `Awesome.Module`

1. Add this configuration in your Gruntfile.js (inside the
	 `grunt.initConfig` block)
```js
grunt.initConfig({
  jse: {
    options: {
			srcDir: 'Web Content/maf/jse',
			specDir: 'test/spec'
    },
    default: {}
  },
})
```
2. Type in the following command
```js
grunt jse --class=Awesome.Module
```

### Command line options

All those options are boolean, you should use `--singleton=true` instead
of `--singleton` as long as there is a bug with the `nopt` module
version (< 0.2) in `grunt`.

#### Generate a singleton module

```js
grunt jse --class=Awesome.Module --singleton=true
```

#### Skip the module file (only generate test files)

```js
grunt jse --class=Awesome.Module --skip-src=true
```

#### Skip the test files (only generate the class file)

```js
grunt jse --class=Awesome.Module --skip-test=true
```

