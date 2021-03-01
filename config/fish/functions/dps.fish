# Defined in - @ line 1
function dps --wraps='docker ps' --description 'alias dps docker ps'
  docker ps $argv;
end
