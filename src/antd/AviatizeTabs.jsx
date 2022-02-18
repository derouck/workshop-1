import { Tabs } from 'antd'
import React from 'react'

const { TabPane } = Tabs

const AviatizeTabs = ({ children }) => {
  if (!children.length) {
    return null
  }

  return (
    <Tabs>
      {children.map((tab, index) => (
        <TabPane tab={tab.props?.title} key={`tab-${index}`}>
          {tab}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default AviatizeTabs
