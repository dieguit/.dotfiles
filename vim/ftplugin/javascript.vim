let g:jsx_ext_required = 0 " Allow JSX in normal JS files
let g:user_emmet_settings = {
  \  'javascript.jsx' : {
    \      'extends' : 'jsx',
    \  },
  \}

" Key mappings:
" td	:TernDoc	Documentation under cursor
" tb	:TernDocBrowse	Browse documentation
" tt	:TernType	Type hints
" td	:TernDef	Jump to definition (yes, 'td' is duplicated)
" tpd	:TernDefPreview	Jump to definition inside preview
" tsd	:TernDefSplit	Definition in new split
" ttd	:TernDefTab	Definition in new tab
" tr	:TernRefs	All references under cursor
" tR	:TernRename	Rename variable
let g:tern_map_keys = 1
 
" Do not show file split after renaming
let g:tern_show_loc_after_rename = 0

let g:javascript_plugin_jsdoc = 1

" === javascript-libraries-syntax === "
let g:used_javascript_libs = 'ramda,lodash,jest'
