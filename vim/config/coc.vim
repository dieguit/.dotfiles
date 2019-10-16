" === Coc.nvim === "

" Use `:F` to format current buffer
command! -nargs=0 F :call CocAction('format')

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
