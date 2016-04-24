module Model where

type alias Build = 
  { branch: String
  , repo: String
  , status: Status
  , authors: List String
  }
  
type Status = Pending | Failure | Success

type alias Model = List Build

init : Model
init = []

defaultBuild : Build
defaultBuild = 
  { branch  = "1234-foobar"
  , repo    = "frontend"
  , status  = Failure
  , authors = ["Deff", "Jevin"] 
  }

