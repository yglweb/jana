export function Posts() {
  return (
    <>
      <div className="posts-container">
        <div className="posts">
          {POSTS.map(video => (
            <div className="post" key={video.url}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img src={video.img} alt=""></img>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const POSTS = [
  {
    url: "https://www.instagram.com/reel/CezsR4KMdwc/",
    img: "./IMG_5658.PNG",
  },

  {
    url: "https://www.instagram.com/reel/Clz8iJ2ATSY/",
    img: "./IMG_5656.PNG",
  },
  {
    url: "https://www.instagram.com/reel/Ctpv0ZQJU3i/",
    img: "./IMG_5635.PNG",
  },
  {
    url: "https://www.tiktok.com/@trysourse/video/7237924152491904302?_r=1&_t=8hurMhZhrSM",
    img: "./IMG_5642.PNG",
  },
  {
    url: "https://www.tiktok.com/t/ZT85jvc3f/",
    img: "./IMG_5641.PNG",
  },
  {
    url: "https://www.instagram.com/reel/CnaRxcGu_3t/",
    img: "./IMG_5653.PNG",
  },
  {
    url: "https://www.instagram.com/reel/CfxFwauDsHm/",
    img: "./IMG_5640.PNG",
  },
  {
    url: "https://www.instagram.com/reel/CjrG181JO0V/",
    img: "./IMG_5636.PNG",
  },
  {
    url: "https://www.tiktok.com/t/ZT85jsNov/",
    img: "./IMG_5643.PNG",
  },
  {
    url: "https://www.instagram.com/reel/CmK29nPvFq9/",
    img: "./IMG_5655.PNG",
  },
  {
    url: "https://www.instagram.com/reel/CjeHXYQDl_N/",
    img: "./IMG_5637.PNG",
  },

  {
    url: "https://www.instagram.com/reel/CrhS2uIrOBJ/",
    img: "./IMG_5652.PNG",
  },

  { url: "https://www.instagram.com/reel/CgAp4I2p8XN/", img: "./IMG_5639.PNG" },
  {
    url: "https://www.instagram.com/reel/Cp76rMPuSF5/",
    img: "./IMG_5647.PNG",
  },
  { url: "https://www.instagram.com/reel/Cunotf3p4zO/", img: "./IMG_5646.PNG" },
  {
    url: "https://www.instagram.com/reel/Czhc4SCSp6K/",
    img: "./IMG_7266.jpg",
  },
  {
    url: "https://www.instagram.com/reel/Ch8HfuFDOsM/",
    img: "./IMG_5638.PNG",
  },

  {
    url: "https://www.instagram.com/reel/CvaG9jaJ8Iu/",
    img: "./IMG_5645.PNG",
  },

  { url: "https://www.instagram.com/reel/Cr3hlndsQWD/", img: "./IMG_5648.PNG" },

  {
    url: "https://www.instagram.com/reel/CwTKl1UgAim/",
    img: "./IMG_5650.PNG",
  },

  {
    url: "https://www.instagram.com/reel/Ctck_d2LWFN/",
    img: "./IMG_5651.PNG",
  },
]
