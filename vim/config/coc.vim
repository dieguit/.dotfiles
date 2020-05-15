" === Coc.nvim === "

" Use `:F` to format current buffer
command! F CocCommand eslint.executeAutofix
" with prettier -> command! -nargs=0 F :call CocAction('format')

"Close preview window when completion is done.
autocmd! CompleteDone * if pumvisible() == 0 | pclose | endif

" if hidden is not set, TextEdit might fail.
set hidden

" Some servers have issues with backup files, see #649
set nobackup
set nowritebackup

" Better display for messages
set cmdheight=2

" You will have bad experience for diagnostic messages when it's default 4000.
set updatetime=300

" don't give |ins-completion-menu| messages.
set shortmess+=c

" always show signcolumns
set signcolumn=yes

" Highlight the symbol and its references when holding the cursor.
autocmd CursorHold * silent call CocActionAsync('highlight')

" Add `:Fold` command to fold current buffer.
command! -nargs=? Fold :call     CocAction('fold', <f-args>)

" Applying codeAction to the selected region.
" Example: `<leader>aap` for current paragraph
nmap <leader>a  <Plug>(coc-codeaction-selected)
