const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/cards/S01.svg",
  "/cards/S02.svg",
  "/cards/S03.svg",
  "/cards/S04.svg",
  "/cards/S05.svg",
  "/cards/S06.svg",
  "/cards/S07.svg",
  "/cards/S08.svg",
  "/cards/S09.svg",
  "/cards/S10.svg",
  "/cards/S11.svg",
  "/cards/S12.svg",
  "/cards/S13.svg",
  "/cards/H01.svg",
  "/cards/H02.svg",
  "/cards/H03.svg",
  "/cards/H04.svg",
  "/cards/H05.svg",
  "/cards/H06.svg",
  "/cards/H07.svg",
  "/cards/H08.svg",
  "/cards/H09.svg",
  "/cards/H10.svg",
  "/cards/H11.svg",
  "/cards/H12.svg",
  "/cards/H13.svg",
  "/cards/D01.svg",
  "/cards/D02.svg",
  "/cards/D03.svg",
  "/cards/D04.svg",
  "/cards/D05.svg",
  "/cards/D06.svg",
  "/cards/D07.svg",
  "/cards/D08.svg",
  "/cards/D09.svg",
  "/cards/D10.svg",
  "/cards/D11.svg",
  "/cards/D12.svg",
  "/cards/D13.svg",
  "/cards/C01.svg",
  "/cards/C02.svg",
  "/cards/C03.svg",
  "/cards/C04.svg",
  "/cards/C05.svg",
  "/cards/C06.svg",
  "/cards/C07.svg",
  "/cards/C08.svg",
  "/cards/C09.svg",
  "/cards/C10.svg",
  "/cards/C11.svg",
  "/cards/C12.svg",
  "/cards/C13.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
