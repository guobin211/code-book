#!/usr/bin/env bash

node -v
a=10
b=11

sh_func() {
  if [ $a -ge $b ]; then
      printf "a is big"
  else
      printf "b is big"
  fi
}

sh_func
