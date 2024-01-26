# Dieguit's dotfiles

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install yadm
brew install git
```

Configure git and then:

```bash
yadm clone git@github.com:dieguit/.dotfiles.git
yadm bootstrap
```

Finally, install other dependencies (node, nvm, python, rust, etc)
