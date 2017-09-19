# TreeTable
## 代码演示
## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|



# bee-tree-table
根据左侧tree节点的选择，动态的展示右侧table的数据,支持table的搜索，分页等功能
## 代码演示
## API
### bee-tree-table
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|data|传入的key,需要与后台返回数据对象的key或者唯一的一个标示符进行匹配|any|-|
|dataSource|table要显示的表结构|array|[]|
|placeholder|输入框的默认提示|string|-|
|onChange| input 的 value 变化时，调用此函数|handleChange(value)|-|
|onKeyDown| 监听input的键盘事件，调用此函数|handleKeyDown()|-|
|onSelect| 当用户选择树节点触发的回调函数|onSelect()|-|
|onSearch| 当用户点击搜索图标时触发的回调函数|handleSearchData(value)|-|



