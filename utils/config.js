let config = {
  videos: [{
      id: 1,
      video: 'https://doraemon1.oss-cn-shanghai.aliyuncs.com/slider/22smBmsxjf.mp4?Expires=1566295301&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=0W5iGY3VcMSOq8dPEZGygeR22OQ%3D',
      name: "第一个视频",
      desc: "这里是第一个视频的描述"
    },
    {
      id: 2,
      video: "https://doraemon1.oss-cn-shanghai.aliyuncs.com/slider/3GGEdrPs4d.mp4?Expires=1566295371&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=nqQL1hZkHeVWOsx7jMz7iukpFT4%3D",
      name: "第二个视频",
      desc: "这是第二个视频描述"
    },
    {
      id: 2,
      video: "https://doraemon1.oss-cn-shanghai.aliyuncs.com/slider/EdJwtZJnnA.mp4?Expires=1566295448&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=6W42cjJ8%2F0eZ3e7QEt%2BDSePeM3o%3D",
      name: "第三个视频",
      desc: "这是第三个视频描述"
    },
    {
      id: 2,
      video: "https://doraemon1.oss-cn-shanghai.aliyuncs.com/slider/HbT2MTws6X.mp4?Expires=1566295465&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=toTn74B9Hi%2Fm6FWM37HD2G8Dhjo%3D",
      name: "第四个视频",
      desc: "这是第四个视频描述"
    }
  ],
  music: [{
      id: 1,
      audio: 'https://doraemon1.oss-cn-shanghai.aliyuncs.com/music/%E5%85%B3%E6%B7%91%E6%80%A1%20-%20%E5%AE%B9%E6%98%93%E5%8F%97%E4%BC%A4%E7%9A%84%E5%A5%B3%E4%BA%BA.mp3?Expires=1566295532&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=0lF%2FgeT9eGah326KI1jfmvnfc8s%3D',
      name: "容易受伤的女人",
      author: "关淑怡"
    },
    {
      id: 2,
      audio: 'https://doraemon1.oss-cn-shanghai.aliyuncs.com/music/%E7%8E%8B%E8%8F%B2%20-%20%E6%9A%A7%E6%98%A7%20%28Live%29.mp3?Expires=1566295608&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=16MdioKKdInUQGVapkPb%2FS6z%2Fg0%3D',
      name: "暧昧",
      author: "王菲"
    },
    {
      id: 3,
      audio: 'https://doraemon1.oss-cn-shanghai.aliyuncs.com/music/%E9%99%88%E6%85%A7%E7%90%B3%20-%20%E9%98%81%E6%A5%BC.mp3?Expires=1566295650&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=8bm%2FE1xaeRVK%2FELTtLHW%2B6%2FJPto%3D',
      name: "阁楼",
      author: "陈慧琳"
    },
    {
      id: 4,
      audio: 'https://doraemon1.oss-cn-shanghai.aliyuncs.com/music/%E9%BB%8E%E7%91%9E%E8%8E%B2%20-%20%E6%B2%A1%E6%B3%95%E5%A4%B1%E5%8E%BB%E4%BD%A0.mp3?Expires=1566295685&OSSAccessKeyId=TMP.hVPSokxA8XSf5JGCyya5AVJU6XS6Loxb52sEfKVoZVrkzp5SuYpERtSJ1rMZPi82n5mRaXMQARPzdaTmcxXY76T8RTrrQBUghQbmwTyeK3YG28dGRL8fgD3LMPFfn3.tmp&Signature=Au8dOsMFt9fO46DUw60j0cUsx%2Bk%3D',
      name: "没法失去你",
      author: "黎瑞恩"
    },
  ]
}
module.exports = {
  config: config
}