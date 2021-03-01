# Defined in - @ line 1
function gca --wraps='git commit -a' --description 'alias gca git commit -a'
  git commit -a $argv;
end
