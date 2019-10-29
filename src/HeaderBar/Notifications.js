import React from 'react'
import PropTypes from 'prop-types'

import { NotificationIcon } from './NotificationIcon.js'

export const Notifications = ({ interpretations, messages, contextPath }) => (
    <div data-test-id="headerbar-notifications">
        <NotificationIcon
            count={interpretations}
            href={`${contextPath}/dhis-web-interpretation`}
            kind="message"
            dataTestId="headerbar-interpretations"
        />

        <NotificationIcon
            message="email"
            count={messages}
            href={`${contextPath}/dhis-web-messaging`}
            kind="interpretation"
            dataTestId="headerbar-messages"
        />

        <style jsx>{`
            div {
                user-select: none;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        `}</style>
    </div>
)
