module Signals where

import Signal exposing (map)
import Mouse
import Model exposing (Build, defaultBuild)

statusUpdates : Signal Build
statusUpdates = 
  map (always defaultBuild) Mouse.clicks

