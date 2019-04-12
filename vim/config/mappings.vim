imap jk <Esc>

" Buffer nav maps
" map <C-J> <C-W>j<C-W>_
" map <C-K> <C-W>k<C-W>_
" map <c-h> <c-w>h<c-w>_
" map <c-l> <c-w>l<c-w>_
let g:tmux_navigator_no_mappings = 1
nnoremap <silent> <C-h> :TmuxNavigateLeft<cr><C-W>_
nnoremap <silent> <C-j> :TmuxNavigateDown<cr><C-W>_
nnoremap <silent> <C-k> :TmuxNavigateUp<cr><C-W>_
nnoremap <silent> <C-l> :TmuxNavigateRight<cr><C-W>_
nnoremap <silent> <C-\> :TmuxNavigatePrevious<cr><C-W>_

" ALEFix run map
nmap <leader>f <Plug>(ale_fix)

" Open NERDTree in the directory of the current file (or /home if no file is open)
nmap <silent> <C-n> :call NERDTreeToggleInCurDir()<cr>

nnoremap <leader><space> :nohlsearch<CR>

imap <expr> <tab> emmet#expandAbbrIntelligent("\<tab>")

map <Leader>vp :VimuxPromptCommand<CR>
map <Leader>vf :call VimuxRunCommand(bufname("%"), 0)<CR>

" Output the current syntax group
nnoremap <f10> :echo "hi<" . synIDattr(synID(line("."),col("."),1),"name") . '> trans<'
\ . synIDattr(synID(line("."),col("."),0),"name") . "> lo<"
\ . synIDattr(synIDtrans(synID(line("."),col("."),1)),"name") . ">"<cr>
