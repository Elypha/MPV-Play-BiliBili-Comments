# mpv-danmaku

启用 mpv 播放器的本地视频弹幕功能。

# 亮点

在这个分支中：

### 本地视频弹幕

您可以播放本地视频文件而不是网址。要将本地视频文件与其对应的 bilibili 弹幕链接，请按照以下���南操作。

**a. 获取视频的 bilibili cid**

有效的 cid 是类似 `304158157` 的数字。您可以使用自己喜欢的方法获取，或者使用这个为此目的制作的[脚本](https://github.com/Elypha/mpv-danmaku/blob/main/release.user.js)（点击安装：[点击](https://raw.githubusercontent.com/Elypha/mpv-danmaku/refs/heads/main/release.user.js)）。

该脚本会在工具栏的用户信息右侧添加一个按钮，点击它，您可以将页面上可用视频的 cid 列表及其标题复制到剪贴板。以下是一个示例。

```
83206504    : 《刀剑神域》第1话 剑的世界
83206721    : 《刀剑神域》第2话 封弊者
304157445   : 《刀剑神域》第3话 红鼻子驯鹿
83206996    : 《刀剑神域》第4话 黑色骑士
83207199    : 《刀剑神域》第5话 圈内事件
...
```

**b. 制作 `danmaku.txt`**

`danmaku.txt` 是一个文件，用于存储本地视频应使用的 cid。每行是一个条目，格式如下：

```
<file_name>,<cid>
```

一个典型的 `danmaku.txt` 应如下所示：

```
Sword Art Online [01][Ma10p_1080p][x265_flac].mkv,83206504
Sword Art Online [02][Ma10p_1080p][x265_flac].mkv,83206721
Sword Art Online [03][Ma10p_1080p][x265_flac].mkv,304157445
Sword Art Online [04][Ma10p_1080p][x265_flac].mkv,83206996
Sword Art Online [05][Ma10p_1080p][x265_flac].mkv,83207199
...
```

该文件应与这些视频文件位于**同一**级别。

当播放视频时，脚本会通过文件名查找匹配项。如果 `danmaku.txt` 中的 `file_name` 部分包含您正在播放的文件的名称（不含扩展名），则匹配项有效。例如，下面这行适用于以下所有文件。

```
`Sword Art Online [01].eng.mkv,83206504`
```

- `Sword Art Online [01].mkv`
- `Sword Art Online [01].eng.mkv`
- `Sword Art Online [01].eng.mp4`
