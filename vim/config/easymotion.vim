let g:EasyMotion_do_mapping = 0 " Disable default mappings

" `s{char}{char}{label}`
" Need one more keystroke, but on average, it may be more comfortable.
map s <Plug>(easymotion-overwin-f2)

"<leader>w - Easy-motion highlights first word letters bi-directionally
map <leader>w <Plug>(easymotion-bd-w)

" Turn on case insensitive feature
let g:EasyMotion_smartcase = 1

" JK motions: Line motions
map <Leader>l <Plug>(easymotion-lineforward)
map <Leader>j <Plug>(easymotion-j)
map <Leader>k <Plug>(easymotion-k)
map <Leader>h <Plug>(easymotion-linebackward)
let g:EasyMotion_startofline = 0 " keep cursor column when JK motion

" Use easymotion for search. These `n` & `N` mappings are options.
" You do not have to map `n` & `N` to EasyMotion.
" Without these mappings, `n` & `N` works fine. (These mappings just provide
" different highlight method and have some other features )
map  / <Plug>(easymotion-sn)
map / <Plug>(easymotion-tn)
map  n <Plug>(easymotion-next)
map  N <Plug>(easymotion-prev)
