import { App } from 'vue'
import Button from './Button'
import Input from './Input'
import InputNumber from './InputNumber'
import Row from './Row'
import Col from './Col'
import Container from './Container'
import Aside from './Aside'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Select from './Select'
import Option from './Option'
import Switch from './Switch'
import Form from './Form'
import FormItem from './FormItem'
import Table from './Table'
import TableColumn from './TableColumn'
import Message from './Message'
import Card from './Card'
import Pagination from './Pagination'
import Menu from './Menu'
import Submenu from './Submenu'
import MenuItemGroup from './MenuItemGroup'
import MenuItem from './MenuItem'
import Breadcrumb from './Breadcrumb'
import BreadcrumbItem from './BreadcrumbItem'
import Upload from './Upload'
import Tags from './Tags'
import KeyValueEditor from './KeyValueEditor'
import Loading from './Loading'
import Avatar from './Avatar'
import Checkbox from './Checkbox'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Dropdown from './Dropdown'
import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

locale.use(lang)

interface VueWindow extends Window {
  Vue?: App
}

const components = [
  Button,
  Input,
  InputNumber,
  Row,
  Col,
  Container,
  Aside,
  Header,
  Footer,
  Main,
  Select,
  Option,
  Switch,
  Form,
  FormItem,
  Table,
  TableColumn,
  Message,
  Card,
  Pagination,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Upload,
  Tags,
  KeyValueEditor,
  Avatar,
  Checkbox,
  Radio,
  RadioGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
]

const plugins = [Loading]

const install = (Vue: App) => {
  components.map(component => Vue.component(component.name, component))
  plugins.forEach(plugin => Vue.use(plugin))
}

const _window: VueWindow = window

if (typeof _window !== 'undefined' && _window.Vue) {
  install(_window.Vue)
}

const packages = {
  install,
  Button,
  Input,
  InputNumber,
  Row,
  Col,
  Container,
  Aside,
  Header,
  Footer,
  Main,
  Select,
  Option,
  Switch,
  Form,
  FormItem,
  Table,
  TableColumn,
  Message,
  Card,
  Pagination,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Upload,
  Tags,
  KeyValueEditor,
  Avatar,
  Checkbox,
  Radio,
  RadioGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
}

export const EmqxMessage = Message

export default packages
