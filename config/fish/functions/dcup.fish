# Defined in - @ line 1
function dcup --wraps='docker-compose up' --description 'alias dcup docker-compose up'
  docker-compose up $argv;
end
