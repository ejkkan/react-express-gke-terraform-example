provider "google" {
  credentials = file("./auth/speedback-303112-39fbf947b1ac.json")
  project     = "speedback-303112"
  region      = "europe-north1"
}