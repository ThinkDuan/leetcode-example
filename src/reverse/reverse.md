## 第7题: 整数翻转
<div html="<p>给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。</p>

<p><strong>示例&amp;nbsp;1:</strong></p>

<pre><strong>输入:</strong> 123
<strong>输出:</strong> 321
</pre>

<p><strong>&amp;nbsp;示例 2:</strong></p>

<pre><strong>输入:</strong> -123
<strong>输出:</strong> -321
</pre>

<p><strong>示例 3:</strong></p>

<pre><strong>输入:</strong> 120
<strong>输出:</strong> 21
</pre>

<p><strong>注意:</strong></p>

<p>假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为&amp;nbsp;[&amp;minus;2<sup>31</sup>,&amp;nbsp; 2<sup>31&amp;nbsp;</sup>&amp;minus; 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。</p>
" class="notranslate"><p>给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。</p>

<p><strong>示例&nbsp;1:</strong></p>

<pre><strong>输入:</strong> 123
<strong>输出:</strong> 321
</pre>

<p><strong>&nbsp;示例 2:</strong></p>

<pre><strong>输入:</strong> -123
<strong>输出:</strong> -321
</pre>

<p><strong>示例 3:</strong></p>

<pre><strong>输入:</strong> 120
<strong>输出:</strong> 21
</pre>

<p><strong>注意:</strong></p>

<p>假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为&nbsp;[−2<sup>31</sup>,&nbsp; 2<sup>31&nbsp;</sup>− 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。</p>
</div>

### 代码实现
```
function reverse(x) {
  let max = Math.pow(2, 31);
  let source = 0;
  if (-max - 1 <= x && x <= max - 1) {
    if (x < 0) {
      x = -x;
      source = Number((x + ' ').split('').reverse().join(''));
      source = -source;
    } else if (x > 0) {
      source = Number((x + ' ').split('').reverse().join(''));
    } else {
      return 0;
    }
  }
  if (-max - 1 <= source && source <= max - 1) {
    return source;
  } else {
    return 0;
  }
}
function reverseOptimize(x) {
  let max = Math.pow(2, 31);
  let source = 0;
  if (-max - 1 <= x && x <= max - 1) {
    if (x < 0) {
      x = -x + ' ';
      source = 0 - reverseString(x);
    } else if (x > 0) {
      source = -(0 - reverseString(x + ''));
    } else {
      return 0;
    }
  }
  if (-max - 1 <= source && source <= max - 1) {
    return source;
  } else {
    return 0;
  }
  function reverseString(string) {
    let length = string.length;
    let reString = '';
    for (let i = length - 1; i > -1; i--) {
      reString += string[i]
    }
    return reString;
  }
}
module.exports = { reverse, reverseOptimize };
```