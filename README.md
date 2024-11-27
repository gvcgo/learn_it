## 如何增加自己想要的内容

在learn_it/content/src/docs目录下，每一个文件夹对应一个大类。在文件夹下，每一个mdx文件对应一个小类。
如果没有为你所提供的资源找到分类，可以自行新建文件夹和mdx文件。

新建的mdx文件，可以按照如下方式添加条目(注意不要重复import)：

```md
import { Card, CardGrid, LinkCard, Icon } from '@astrojs/starlight/components';

<CardGrid>
	<Card title="图解Redis By 小林coding" icon="seti:notebook">
		<LinkCard title="网站" href="https://xiaolincoding.com/redis/" />
		<LinkCard title="Github" href="https://github.com/xiaolincoder/CS-Base" />
	</Card>
</CardGrid>
```

## 也可以在issue中提出想要增加的内容

想要增加的内容最好是有网站链接的免费公开资源。可以是笔记资料，开源书籍，开源项目，公开课程等等。
只要是认为对学习计算机科学有帮助的优秀资源，都可以提交issue。
只要是非常好用的软件工具，尤其是开源工具，也可以提交issue。

## learn-it的目标

Learn-it的目标是收集计算机科学领域优秀的公开资源，并按照一定的分类进行整理，方便大家学习和使用。

## 截图demo

[去到主页](https://go.learnit.us.kg/)

<img src="https://raw.githubusercontent.com/gvcgo/learn_it/refs/heads/main/src/assets/learn_it.png" alt="主页" />

<img src="https://raw.githubusercontent.com/gvcgo/learn_it/refs/heads/main/src/assets/learn_it_content.png" alt="内容" />
