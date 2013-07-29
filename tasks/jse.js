/*
 * grunt-jse
 * https://github.com/ymainier/grunt-jse
 *
 * Copyright (c) 2013 Yann Mainier
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');


module.exports = function(grunt) {

	function buildFilePathFor(className, prefix, suffix) {
		var classNameSplited = className.split('.');
		var classNamePath = path.join.apply(path, classNameSplited);
		var classNameFile = classNameSplited[classNameSplited.length - 1];

		return path.join(prefix, classNamePath, classNameFile + suffix);
	}

	function createFile(className, templateName, pathPrefix, pathSuffix) {
		// Get template
		var importTemplate = grunt.file.read(templateName);
		// Fill it with data
		var importContent = grunt.template.process(importTemplate, {
			data: {
				className: className
			}
		});

		// Build file path
		var importFilePath = buildFilePathFor(className, pathPrefix, pathSuffix);


		// Finally write content to the file
		if (grunt.file.exists(importFilePath)) {
			grunt.log.errorlns("Skipped " + importFilePath + ", it already exists");
		} else {
			grunt.file.write(importFilePath, importContent);
			grunt.log.oklns("Created " + importFilePath);
		}
	}

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks


	grunt.registerMultiTask('jse', 'Generate JSE skeleton files for a class', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			specDir: 'test/spec',
			srcDir: 'src',
			"skip-src": false,
			"skip-test": false
		});
		var className = grunt.option('class') || options.className;
		var useSingleton = grunt.option('singleton');

		var shouldSkipClassFile = !!grunt.option('skip-src');
		var shouldSkipTestFile = !!grunt.option('skip-test');

		if (!className) {
			grunt.fatal('You must speciy class name with --class');
		}

		if (shouldSkipClassFile) {
			grunt.log.writelns('Skipping JSE Class file');
		} else {
			var classTemplate = useSingleton ? 'templates/ClassSingleton.js.tmpl' : 'templates/Class.js.tmpl';
			grunt.log.writelns('JSE Class file');
			createFile(
				className,
				classTemplate,
				path.join(options.srcDir),
				'.js'
			);
		}

		if (shouldSkipTestFile) {
			grunt.log.writelns('Skipping JSE Test files');
		} else {
			grunt.log.writelns('Test: spec file');
			createFile(
				className,
				'templates/Spec.js.tmpl',
				path.join(options.specDir),
				'Spec.js'
			);

			grunt.log.writelns('Test: import file');
			createFile(
				className,
				'templates/Import.js.tmpl',
				path.join(options.specDir, 'Import'),
				'.js'
			);
		}
	});

};
