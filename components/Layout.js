import React, { Component } from 'react' // eslint-disable-line
import { LocaleProvider } from 'antd-mobile'

export default class Layout extends Component {
  render () {
    const { language, children } = this.props
    const locale = language.substr(0, 2) === 'en' ? 'enUS' : undefined

    return (
      <LocaleProvider locale={locale}>
        {children}
      </LocaleProvider>
    )
  }
}
