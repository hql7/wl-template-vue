import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Scrollbar,
  Main,
  Container,
  Header,
  Dialog,
  Aside,
  Footer,
  Form,
  FormItem,
  Input,
  ColorPicker,
  Option,
  Select,
  Tabs,
  TabPane,
  Icon,
  DatePicker,
  Upload,
  Table,
  TableColumn,
  Pagination,
  Tree,
  Popover,
  Message,
  MessageBox,
  Tag,
  Autocomplete,
  Col,
  Checkbox,
  Radio,
  Row,
  Collapse,
  CollapseItem,
  Loading,
  Link,
  RadioGroup,
  Tooltip,
  PageHeader,
  Divider,
  Image,
  CheckboxGroup,
} from 'element-ui'
import locale from 'element-ui/lib/locale'
import zh from 'element-ui/lib/locale/lang/zh-CN'
import en from 'element-ui/lib/locale/lang/en'

export default {
  components: [
    Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Scrollbar,
    Main,
    Container,
    Header,
    Dialog,
    Aside,
    Footer,
    Form,
    FormItem,
    Input,
    ColorPicker,
    Option,
    Select,
    Tabs,
    TabPane,
    Icon,
    DatePicker,
    Upload,
    Table,
    TableColumn,
    Pagination,
    Tree,
    Popover,
    Message,
    MessageBox,
    Tag,
    Autocomplete,
    Col,
    Checkbox,
    Radio,
    Row,
    Collapse,
    CollapseItem,
    Loading,
    Link,
    RadioGroup,
    Tooltip,
    PageHeader,
    Divider,
    Image,
    CheckboxGroup,
  ],
  locale,
  langs: {
    zh,
    en
  }
}

/**
 * message方法 默认可关闭
 * @param {*} options 消息 | 配置项
 */
function wlMessage(options) {
  Object.prototype.toString.call(options) === '[object Object]'
    ? Message({
      showClose: true,
      ...options
    })
    : Message({
      showClose: true,
      message: options
    })
}

/**
 * 确认框，默认确定取消按钮，警告状态
 * @param {*} message 提示语
 * @param {*} title 标题
 * @param {*} options 配置
 */
function wlConfirm(message, title = "提示", options = {}) {
  let _options = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    ...options
  }
  return MessageBox.confirm(message, title, _options)
}

/**
 * 提交内容
 * @param {*} message 提示语
 * @param {*} title 标题
 * @param {*} options 配置
 */
function wlPrompt(message, title = "提示", options = {}) {
  let _options = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    ...options
  }
  return MessageBox.prompt(message, title, _options);
}

// 导出el方法
export {
  wlMessage,
  wlConfirm,
  wlPrompt
}