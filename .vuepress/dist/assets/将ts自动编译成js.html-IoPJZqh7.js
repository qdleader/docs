import{_ as e,o as t,c as n,d as s}from"./app-C59QzqDT.js";const a={},o=s(`<p>安装 ts</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i typescript <span class="token operator">-</span>g

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>tsc --init</p><p>将json 文件的</p><p>&quot;outDir&quot;: &quot;./js&quot;</p><p>或直接用下面的json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">/* Visit https://aka.ms/tsconfig to read more about this file */</span>

		<span class="token comment">/* Projects */</span>
		<span class="token comment">// &quot;incremental&quot;: true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */</span>
		<span class="token comment">// &quot;composite&quot;: true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */</span>
		<span class="token comment">// &quot;tsBuildInfoFile&quot;: &quot;./.tsbuildinfo&quot;,              /* Specify the path to .tsbuildinfo incremental compilation file. */</span>
		<span class="token comment">// &quot;disableSourceOfProjectReferenceRedirect&quot;: true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */</span>
		<span class="token comment">// &quot;disableSolutionSearching&quot;: true,                 /* Opt a project out of multi-project reference checking when editing. */</span>
		<span class="token comment">// &quot;disableReferencedProjectLoad&quot;: true,             /* Reduce the number of projects loaded automatically by TypeScript. */</span>

		<span class="token comment">/* Language and Environment */</span>
		<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2016&quot;</span> <span class="token comment">/* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */</span><span class="token punctuation">,</span>
		<span class="token comment">// &quot;lib&quot;: [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */</span>
		<span class="token comment">// &quot;jsx&quot;: &quot;preserve&quot;,                                /* Specify what JSX code is generated. */</span>
		<span class="token comment">// &quot;experimentalDecorators&quot;: true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */</span>
		<span class="token comment">// &quot;emitDecoratorMetadata&quot;: true,                    /* Emit design-type metadata for decorated declarations in source files. */</span>
		<span class="token comment">// &quot;jsxFactory&quot;: &quot;&quot;,                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. &#39;React.createElement&#39; or &#39;h&#39;. */</span>
		<span class="token comment">// &quot;jsxFragmentFactory&quot;: &quot;&quot;,                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. &#39;React.Fragment&#39; or &#39;Fragment&#39;. */</span>
		<span class="token comment">// &quot;jsxImportSource&quot;: &quot;&quot;,                            /* Specify module specifier used to import the JSX factory functions when using &#39;jsx: react-jsx*&#39;. */</span>
		<span class="token comment">// &quot;reactNamespace&quot;: &quot;&quot;,                             /* Specify the object invoked for &#39;createElement&#39;. This only applies when targeting &#39;react&#39; JSX emit. */</span>
		<span class="token comment">// &quot;noLib&quot;: true,                                    /* Disable including any library files, including the default lib.d.ts. */</span>
		<span class="token comment">// &quot;useDefineForClassFields&quot;: true,                  /* Emit ECMAScript-standard-compliant class fields. */</span>
		<span class="token comment">// &quot;moduleDetection&quot;: &quot;auto&quot;,                        /* Control what method is used to detect module-format JS files. */</span>

		<span class="token comment">/* Modules */</span>
		<span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span> <span class="token comment">/* Specify what module code is generated. */</span><span class="token punctuation">,</span>
		<span class="token comment">// &quot;rootDir&quot;: &quot;./&quot;,                                  /* Specify the root folder within your source files. */</span>
		<span class="token comment">// &quot;moduleResolution&quot;: &quot;node&quot;,                       /* Specify how TypeScript looks up a file from a given module specifier. */</span>
		<span class="token comment">// &quot;baseUrl&quot;: &quot;./&quot;,                                  /* Specify the base directory to resolve non-relative module names. */</span>
		<span class="token comment">// &quot;paths&quot;: {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */</span>
		<span class="token comment">// &quot;rootDirs&quot;: [],                                   /* Allow multiple folders to be treated as one when resolving modules. */</span>
		<span class="token comment">// &quot;typeRoots&quot;: [],                                  /* Specify multiple folders that act like &#39;./node_modules/@types&#39;. */</span>
		<span class="token comment">// &quot;types&quot;: [],                                      /* Specify type package names to be included without being referenced in a source file. */</span>
		<span class="token comment">// &quot;allowUmdGlobalAccess&quot;: true,                     /* Allow accessing UMD globals from modules. */</span>
		<span class="token comment">// &quot;moduleSuffixes&quot;: [],                             /* List of file name suffixes to search when resolving a module. */</span>
		<span class="token comment">// &quot;resolveJsonModule&quot;: true,                        /* Enable importing .json files. */</span>
		<span class="token comment">// &quot;noResolve&quot;: true,                                /* Disallow &#39;import&#39;s, &#39;require&#39;s or &#39;&lt;reference&gt;&#39;s from expanding the number of files TypeScript should add to a project. */</span>

		<span class="token comment">/* JavaScript Support */</span>
		<span class="token comment">// &quot;allowJs&quot;: true,                                  /* Allow JavaScript files to be a part of your program. Use the &#39;checkJS&#39; option to get errors from these files. */</span>
		<span class="token comment">// &quot;checkJs&quot;: true,                                  /* Enable error reporting in type-checked JavaScript files. */</span>
		<span class="token comment">// &quot;maxNodeModuleJsDepth&quot;: 1,                        /* Specify the maximum folder depth used for checking JavaScript files from &#39;node_modules&#39;. Only applicable with &#39;allowJs&#39;. */</span>

		<span class="token comment">/* Emit */</span>
		<span class="token comment">// &quot;declaration&quot;: true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */</span>
		<span class="token comment">// &quot;declarationMap&quot;: true,                           /* Create sourcemaps for d.ts files. */</span>
		<span class="token comment">// &quot;emitDeclarationOnly&quot;: true,                      /* Only output d.ts files and not JavaScript files. */</span>
		<span class="token comment">// &quot;sourceMap&quot;: true,                                /* Create source map files for emitted JavaScript files. */</span>
		<span class="token comment">// &quot;outFile&quot;: &quot;./&quot;,                                  /* Specify a file that bundles all outputs into one JavaScript file. If &#39;declaration&#39; is true, also designates a file that bundles all .d.ts output. */</span>
		<span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./js&quot;</span> <span class="token comment">/* Specify an output folder for all emitted files. */</span><span class="token punctuation">,</span>
		<span class="token comment">// &quot;removeComments&quot;: true,                           /* Disable emitting comments. */</span>
		<span class="token comment">// &quot;noEmit&quot;: true,                                   /* Disable emitting files from a compilation. */</span>
		<span class="token comment">// &quot;importHelpers&quot;: true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */</span>
		<span class="token comment">// &quot;importsNotUsedAsValues&quot;: &quot;remove&quot;,               /* Specify emit/checking behavior for imports that are only used for types. */</span>
		<span class="token comment">// &quot;downlevelIteration&quot;: true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */</span>
		<span class="token comment">// &quot;sourceRoot&quot;: &quot;&quot;,                                 /* Specify the root path for debuggers to find the reference source code. */</span>
		<span class="token comment">// &quot;mapRoot&quot;: &quot;&quot;,                                    /* Specify the location where debugger should locate map files instead of generated locations. */</span>
		<span class="token comment">// &quot;inlineSourceMap&quot;: true,                          /* Include sourcemap files inside the emitted JavaScript. */</span>
		<span class="token comment">// &quot;inlineSources&quot;: true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */</span>
		<span class="token comment">// &quot;emitBOM&quot;: true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */</span>
		<span class="token comment">// &quot;newLine&quot;: &quot;crlf&quot;,                                /* Set the newline character for emitting files. */</span>
		<span class="token comment">// &quot;stripInternal&quot;: true,                            /* Disable emitting declarations that have &#39;@internal&#39; in their JSDoc comments. */</span>
		<span class="token comment">// &quot;noEmitHelpers&quot;: true,                            /* Disable generating custom helper functions like &#39;__extends&#39; in compiled output. */</span>
		<span class="token comment">// &quot;noEmitOnError&quot;: true,                            /* Disable emitting files if any type checking errors are reported. */</span>
		<span class="token comment">// &quot;preserveConstEnums&quot;: true,                       /* Disable erasing &#39;const enum&#39; declarations in generated code. */</span>
		<span class="token comment">// &quot;declarationDir&quot;: &quot;./&quot;,                           /* Specify the output directory for generated declaration files. */</span>
		<span class="token comment">// &quot;preserveValueImports&quot;: true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */</span>

		<span class="token comment">/* Interop Constraints */</span>
		<span class="token comment">// &quot;isolatedModules&quot;: true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */</span>
		<span class="token comment">// &quot;allowSyntheticDefaultImports&quot;: true,             /* Allow &#39;import x from y&#39; when a module doesn&#39;t have a default export. */</span>
		<span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Emit additional JavaScript to ease support for importing CommonJS modules. This enables &#39;allowSyntheticDefaultImports&#39; for type compatibility. */</span><span class="token punctuation">,</span>
		<span class="token comment">// &quot;preserveSymlinks&quot;: true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */</span>
		<span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Ensure that casing is correct in imports. */</span><span class="token punctuation">,</span>

		<span class="token comment">/* Type Checking */</span>
		<span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">/* Enable all strict type-checking options. */</span><span class="token punctuation">,</span>
		<span class="token comment">// &quot;noImplicitAny&quot;: true,                            /* Enable error reporting for expressions and declarations with an implied &#39;any&#39; type. */</span>
		<span class="token comment">// &quot;strictNullChecks&quot;: true,                         /* When type checking, take into account &#39;null&#39; and &#39;undefined&#39;. */</span>
		<span class="token comment">// &quot;strictFunctionTypes&quot;: true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */</span>
		<span class="token comment">// &quot;strictBindCallApply&quot;: true,                      /* Check that the arguments for &#39;bind&#39;, &#39;call&#39;, and &#39;apply&#39; methods match the original function. */</span>
		<span class="token comment">// &quot;strictPropertyInitialization&quot;: true,             /* Check for class properties that are declared but not set in the constructor. */</span>
		<span class="token comment">// &quot;noImplicitThis&quot;: true,                           /* Enable error reporting when &#39;this&#39; is given the type &#39;any&#39;. */</span>
		<span class="token comment">// &quot;useUnknownInCatchVariables&quot;: true,               /* Default catch clause variables as &#39;unknown&#39; instead of &#39;any&#39;. */</span>
		<span class="token comment">// &quot;alwaysStrict&quot;: true,                             /* Ensure &#39;use strict&#39; is always emitted. */</span>
		<span class="token comment">// &quot;noUnusedLocals&quot;: true,                           /* Enable error reporting when local variables aren&#39;t read. */</span>
		<span class="token comment">// &quot;noUnusedParameters&quot;: true,                       /* Raise an error when a function parameter isn&#39;t read. */</span>
		<span class="token comment">// &quot;exactOptionalPropertyTypes&quot;: true,               /* Interpret optional property types as written, rather than adding &#39;undefined&#39;. */</span>
		<span class="token comment">// &quot;noImplicitReturns&quot;: true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */</span>
		<span class="token comment">// &quot;noFallthroughCasesInSwitch&quot;: true,               /* Enable error reporting for fallthrough cases in switch statements. */</span>
		<span class="token comment">// &quot;noUncheckedIndexedAccess&quot;: true,                 /* Add &#39;undefined&#39; to a type when accessed using an index. */</span>
		<span class="token comment">// &quot;noImplicitOverride&quot;: true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */</span>
		<span class="token comment">// &quot;noPropertyAccessFromIndexSignature&quot;: true,       /* Enforces using indexed accessors for keys declared using an indexed type. */</span>
		<span class="token comment">// &quot;allowUnusedLabels&quot;: true,                        /* Disable error reporting for unused labels. */</span>
		<span class="token comment">// &quot;allowUnreachableCode&quot;: true,                     /* Disable error reporting for unreachable code. */</span>

		<span class="token comment">/* Completeness */</span>
		<span class="token comment">// &quot;skipDefaultLibCheck&quot;: true,                      /* Skip type checking .d.ts files that are included with TypeScript. */</span>
		<span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Skip type checking all .d.ts files. */</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后选择 终端 --》 运行任务 --》 监视tsconfig.json 即可</p>`,8),i=[o];function l(r,c){return t(),n("div",null,i)}const p=e(a,[["render",l],["__file","将ts自动编译成js.html.vue"]]);export{p as default};
