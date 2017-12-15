/*
 
 书写位置
	1.内嵌式
		理论上，js可以书写在html文档的任意位置。
		注意：在不影响功能的前提之下，js越晚加载越好。
		<script type="text/javascript">
			alert("Hello World!");
		</script>
	
	2.外链式
		首先新建一个.js的文件，在该文件中书写js语句，然后通过script引
		注意：script标签一次只能做一件事情，要么引入，要么写js语句。
		<script src="js/out.js"></script>
		<script>
			alert("02Hello World!");
		</script>
	
	3.行内式
		直接写在标签身上的
		简写的事件
		事件类型="执行指令"
		<input type="button" onclick="alert('02Hello World!'
		注意：引号嵌套使用的时候，必须单双交替！
	

数据类型
	java:
		整型		byte short int long
		浮点型	float double
		布尔型	boolean
		字符型	char
		
		语法格式:	数据类型 变量名 = 初始化值;
	
	js:
		数值型	凡是数字都是该类型	number
		字符串型	凡是带引号的都是该类型	string
		对象型	特殊值null		object
		未定义型	undefined		undefined
		布尔型	true false		boolean
		
		语法格式:	var 变量名 = 初始化值;
		
		检测数据类型：typeof 变量名;
				 typeof(变量名);
				 
		命名规范：
			1.只能是数字、下划线、美元符号、字母组合而成。
			2.不能以数字开头。
			3.不能和关键字冲突。
			
		驼峰命名法：第二个单词开始首字母大写
		
		
运算符
	1.算术运算符
		+ - * / % ++ --
		
	注意：
		1.通过+号和字符串可以拼接成一个全新的字符串
		2.字符串除了+号以外的运算，如果字符串本身是一个数字，那么先转换
		3.字符串除了+号以外的运算，如果字符串本身不是一个数字，那么就会
		4.0如果作为被除数，除不尽，就会返回Infinity
		
	2.关系运算符	true false
		> < >= <= != 
		== 	只比较内容，不比较类型
		===	比较内容的同时还要比较类型	恒等于
		
	3.逻辑运算符
		&&	与	都为true才会返回true
			A&&B
				如果A为true，返回B
				如果A为false，返回A
			
		||	或	一个为true就会返回true
			A||B
				如果A为true，返回A
				如果A为false，返回B
				
		!	非	取反
		
	true:非0  非null 非undefined
	
	false:0 null undefined
	3.三元运算符
		A?B:C	如果为真返回B
				如果为假返回C
				
	alert();浏览器的弹窗
	console.log();在控制台以日志形式输出结果
	全局函数:parseInt(); 不会四舍五入的取整，把字符串转换成数值型
	Math.round(1.5);  四舍五入的取整
 
 
 
 
 
 DOM 文档对象模型	增删改查
	查
		id:document.getElementById("");
			获取到的一定是一个元素
		
		以下的方式获取到的都是一个集合（数组）
		注意：
			1.js中不允许对数组进行整体的操控
			2.哪怕页面中只存在一个该元素，格式也是一个数组
		
		name:document.getElementsByName("");
		
		标签名:document.getElementsByTagName("");
		
		类名:document.getElementsByClassName("");
		
	
	改变标签内容:
		innerHTML	获取内部的所有内容，包括标签
		innerText	只能获取内部的文本内容
		
	判断是否拥有子节点
		hasChildNodes();	true false
			注意：内部的文本、标签和回车空格都会返回true
	
	删除节点
		remove();
		removeChild();
		
	替换节点
		replaceChild(new,old);
		
		如果拿页面中已经存在的节点进行操作，就是一个剪切和粘贴的过程
		
	新建节点
		document.createElement("a");
		在内存中新建了一个空的a标签<a></a>
		
		appendChild();	标签内部的末尾处
		insertBefore(new,old); 在标签内部指定的标签之前新增
		
	标签属性
		1.对象.属性名
		
		2.	对象.getAttribute();
			对象.setAttribute();
			对象.removeAttribute();
			
	改变css
		对象.style.width = "100px";
		box.style.backgroundColor = "pink";
		font-size	======>    fontSize
			-会被理解成减法，所以必须去掉，第二个单词首字母大写
		
	
	数组
		var arr = new Array(); 	 创建了一个空数组
		var arr = new Array(10); 创建了一个长度为10的数组
		var arr = new Array('1',1,true,null,"123"); 创建了一个有参数的数组
		var arr = [1,2,'1',true,null]; 创建了一个有参数的数组
		
	日期对象
		new Date();
		
	数学对象
		Math.random();	0-1之间的随机小数
		
	正则对象
		var a = new RegExp("正则表达式");
		var b = / 正则表达式  /;
		
		test();	true false
		
		^	匹配行开始
		$	匹配行结尾
		
		
	在事件的执行指令中，this代表的是当前正在被操作的事件源
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 */