" ============================================================================ "
" ===                               PLUGINS                                === "
" ============================================================================ "

" check whether vim-plug is installed and install it if necessary
let plugpath = expand('<sfile>:p:h'). '/autoload/plug.vim'
if !filereadable(plugpath)
    if executable('curl')
        let plugurl = 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
        call system('curl -fLo ' . shellescape(plugpath) . ' --create-dirs ' . plugurl)
        if v:shell_error
            echom "Error downloading vim-plug. Please install it manually.\n"
            exit
        endif
    else
        echom "vim-plug not installed. Please install it manually or install curl.\n"
        exit
    endif
endif

call plug#begin('~/.config/nvim/plugged')

" === Editing Plugins === "
" Trailing whitespace highlighting & automatic fixing
"Plug 'ntpeters/vim-better-whitespace'
Plug 'tpope/vim-sensible'

" auto-close plugin
"Plug 'rstacruz/vim-closer'

" Comments and surrounds
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-surround'

" Search for, substitute, abbreviate and coerce
Plug 'tpope/vim-abolish'

" Enable local rc
Plug 'thinca/vim-localrc'

" Improved motion in Vim
Plug 'easymotion/vim-easymotion'

" Emmet
Plug 'mattn/emmet-vim'

" Intellisense Engine
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" Tmux/Neovim movement integration
Plug 'christoomey/vim-tmux-navigator'

" Denite - Fuzzy finding, buffer management
Plug 'Shougo/denite.nvim'
Plug 'jremmen/vim-ripgrep'

" Ultisnips
Plug 'SirVer/ultisnips'
Plug 'honza/vim-snippets'
" ES2015 code snippets
Plug 'epilande/vim-es2015-snippets'
" React code snippets (Optional)
Plug 'epilande/vim-react-snippets'

" Print function signatures in echo area
"Plug 'Shougo/echodoc.vim'

" === Git Plugins === "
" Enable git changes to be shown in sign column
Plug 'airblade/vim-gitgutter'
Plug 'tpope/vim-fugitive'

" === Syntax Highlighting === "
" Syntax highlighting for javascript libraries
"Plug 'othree/javascript-libraries-syntax.vim'

" Improved syntax highlighting and indentation
" Plug 'othree/yajs.vim'
Plug 'sheerun/vim-polyglot'

" === UI === "

Plug 'mhinz/vim-startify'
" Smooth scrolling
Plug 'psliwka/vim-smoothie'

" Preview colors -> requires golang
Plug 'rrethy/vim-hexokinase', { 'do': 'make hexokinase' }

" Colorscheme
Plug 'NLKNguyen/papercolor-theme'
Plug 'altercation/vim-colors-solarized'
Plug 'lifepillar/vim-solarized8'

" Customized vim status line
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

" Icons
" Plug 'ryanoasis/vim-devicons'
" Plug 'tiagofumo/vim-nerdtree-syntax-highlight'

" Auto-imports for non-tsserver compatible projects
Plug 'galooshi/vim-import-js'

" Initialize plugin system
call plug#end()
