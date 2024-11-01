# mpv-danmaku

Enable danmaku for local video files with mpv player.

![2024-11-01_12-23-46_005](https://github.com/user-attachments/assets/f49b5b1f-a086-4426-9b1e-935653452a7f)


# Highlights

In this fork:

### Danmaku for local videos

You play local video files instead of urls. To link a local video file with its corresponding danmaku from bilibili, follow the following guide.

**a. Get bilibili cid for your video**

A valid cid is a number like `304158157`. You may implement your favourite ways to get this, or use this [script](https://github.com/Elypha/mpv-danmaku/blob/main/release.user.js) (click to install: [click](https://raw.githubusercontent.com/Elypha/mpv-danmaku/refs/heads/main/release.user.js)) made for this specific purpose.

![2024-11-01_12-18-48_634](https://github.com/user-attachments/assets/469d845e-a071-4d6d-ae51-c57034481481)

The script adds a button to the playlist and by clicking it, you copy a list of cids of videos available on the page, together with their titles, to your clipboard. Here's an example.

```
83206504    : 《刀剑神域》第1话 剑的世界
83206721    : 《刀剑神域》第2话 封弊者
304157445   : 《刀剑神域》第3话 红鼻子驯鹿
83206996    : 《刀剑神域》第4话 黑色骑士
83207199    : 《刀剑神域》第5话 圈内事件
...
```

**b. Make `danmaku.txt`**

`danmaku.txt` is a file to store which cid should be used for each of your local videos. Each line is an entry and the format is:

```
<file_name>,<cid>
```

A typical `danmaku.txt` should look like:

```
Sword Art Online [01][Ma10p_1080p][x265_flac].mkv,83206504
Sword Art Online [02][Ma10p_1080p][x265_flac].mkv,83206721
Sword Art Online [03][Ma10p_1080p][x265_flac].mkv,304157445
Sword Art Online [04][Ma10p_1080p][x265_flac].mkv,83206996
Sword Art Online [05][Ma10p_1080p][x265_flac].mkv,83207199
...
```

The file should be placed at the **same** level with those video files.

When a video is played, the script will look for a match by file name. A match is valid if the `file_name` part in your `danmaku.txt` contains the name (without ext) of the file you are playing. For example, this line below works for all the following files.

```
Sword Art Online [01].eng.mkv,83206504
```

- `Sword Art Online [01].mkv`
- `Sword Art Online [01].eng.mkv`
- `Sword Art Online [01].eng.mp4`
