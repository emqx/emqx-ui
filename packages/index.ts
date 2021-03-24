import { App } from 'vue'
import Button from './Button'
import Input from './Input'
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
import TagsCheckbox from './TagsCheckbox'
import KeyValueEditor from './KeyValueEditor'

interface VueWindow extends Window {
  Vue?: App
}

const components = [
  Button,
  Input,
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
  TagsCheckbox,
  KeyValueEditor,
]

const install = (Vue: App) => {
  components.map(component => Vue.component(component.name, component))
}

const _window: VueWindow = window

if (typeof _window !== 'undefined' && _window.Vue) {
  install(_window.Vue)
}

const packages = {
  install,
  Button,
  Input,
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
  TagsCheckbox,
  KeyValueEditor,
}

export default packages
