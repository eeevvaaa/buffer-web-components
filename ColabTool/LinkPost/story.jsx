import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import LinkPost from './index';

const links = [{
  rawString: 'http://buff.ly/1LTbUqv',
  displayString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  indices: [74, 96],
}];

const text = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const linkAttachment = {
  title: 'What is a Product Designer?',
  description: 'A brief history at how history and markets influence design titles',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  thumbnailUrl: 'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
};

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post will be added to the queue',
};

const draftDetailsPastDue = {
  ...draftDetails,
  postAction: 'This post was scheduled for March 12 at 9:42pm (GMT)',
};

const draftDetailsScheduled = {
  ...draftDetails,
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const squareImage = 'http://lorempixel.com/400/400/cats/';
const tallImage = 'http://lorempixel.com/400/900/cats/';
const wideImage = 'http://lorempixel.com/900/400/cats/';

const approvalView = 'approval';
const scheduledAt = 123456789;

storiesOf('LinkPost', module)
  .addDecorator(checkA11y)
  .add('default. All approval view.', () => (
    <LinkPost
      hasPermission
      links={links}
      linkAttachment={linkAttachment}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={approvalView}
    />
  ))
  .add('scheduled', () => (
    <LinkPost
      hasPermission
      links={links}
      linkAttachment={linkAttachment}
      draftDetails={draftDetailsScheduled}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      scheduledAt={scheduledAt}
      view={approvalView}
    />
  ))
  .add('manager', () => (
    <LinkPost
      hasPermission
      links={links}
      linkAttachment={linkAttachment}
      draftDetails={draftDetails}
      text={text}
      manager
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={approvalView}
    />
  ))
  .add('square image', () => (
    <LinkPost
      hasPermission
      links={links}
      linkAttachment={{ ...linkAttachment, thumbnailUrl: squareImage }}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={approvalView}
    />
  ))
  .add('tall image', () => (
    <LinkPost
      hasPermission
      links={links}
      linkAttachment={{ ...linkAttachment, thumbnailUrl: tallImage }}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={approvalView}
    />
  ))
  .add('wide image', () => (
    <LinkPost
      hasPermission
      links={links}
      linkAttachment={{ ...linkAttachment, thumbnailUrl: wideImage }}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={approvalView}
    />
  ))
  .add('past due', () => (
    <LinkPost
      hasPermission
      links={links}
      linkAttachment={linkAttachment}
      draftDetails={draftDetailsPastDue}
      isPastDue
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      scheduledAt={scheduledAt}
      view={approvalView}
    />
  ))
  .add('past due no permission', () => (
    <LinkPost
      hasPermission={false}
      links={links}
      linkAttachment={linkAttachment}
      draftDetails={draftDetailsPastDue}
      isPastDue
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      scheduledAt={scheduledAt}
      view={approvalView}
    />
  ))
  .add('no permission', () => (
    <LinkPost
      hasPermission={false}
      links={links}
      linkAttachment={linkAttachment}
      draftDetails={draftDetailsPastDue}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      view={approvalView}
    />
  ));
