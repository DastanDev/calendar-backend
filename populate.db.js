const axios = require("axios")
const datas = [
  {
    title: "title of news",
    content: "content of news",
    image: "https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg",
    tag: "lifestyle",
  },
  {
    title: "title of news2",
    content: "content of news",
    image: "https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg",
    tag: "lifestyle",
    author: 1,
  },
  {
    title: "title of news3",
    content: "content of news",
    image: "https://mdbootstrap.com/img/Photos/Others/img(35).jpg",
    tag: "lifestyle",
  },
  {
    title: "title of news4",
    content: "content of news",
    image: "https://mdbootstrap.com/img/Photos/rs/img(39).jpg",
    tag: "lifestyle",
  },
  {
    title: "title of news5",
    content: "content of news",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg",
    tag: "lifestyle",
  },
  {
    title: "title of news6",
    content: "content of news",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg",
    tag: "lifestyle",
  },
]

const sendData = async (data) => {
  try {
    const { data: res } = await axios({
      method: "POST",
      url: "http://localhost:5000/api/news/create",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5Nzg3ODIyLCJleHAiOjE2MzAzOTI2MjJ9.LWUJimQcEEZdlCEwgAyrZYkbnlD9O7_5Wdv-niByMww`,
      },
      data,
    })
    console.log(res)
  } catch (error) {
    console.log(error.response.data.message)
  }
}

for (let i = 0; i < datas.length; i++) {
  const data = datas[i]
  sendData(data)
}
