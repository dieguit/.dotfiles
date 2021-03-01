let g:startify_lists = [
  \ { 'header': ['   MRU '. getcwd()], 'type': 'dir' },
  \ { 'header': ['   Bookmarks'],      'type': 'bookmarks' },
  \ { 'header': ['   Commands'],       'type': 'commands' },
  \ { 'header': ['   Sessions'],       'type': 'sessions' },
  \ ]

let g:startify_bookmarks = [ {'c': '~/.dotfiles'}, '~/.dotfiles/vim', '~/.dotfiles/config/fish' ]

let g:startify_session_before_save = [
    \ 'silent! CocCommand explorer'
    \ ]
