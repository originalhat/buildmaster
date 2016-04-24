module Update where

import Signal

import Model exposing (Model, Build)
import List exposing ((::))
import Signals 

-- ACTIONS --
type Action
  = NoOp
  | ReceiveStatusUpdate Build

-- REDUCER --
update : Action -> Model -> Model
update action model = 
  case action of
    NoOp ->
      model
    ReceiveStatusUpdate receivedStatus ->
      receivedStatus :: model

-- dispatcher --
model : Signal Model
model = Signal.foldp update Model.init (Signal.map ReceiveStatusUpdate Signals.statusUpdates)





-- shift c /cc
-- ctl i + o

