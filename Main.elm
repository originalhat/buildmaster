import Graphics.Element exposing (..)

import Model exposing (Model)
import Update
import Signal

-- connecting model data to view (on change)
main = 
  Signal.map view Update.model

view : Model -> Element
view model =
  show model

