export default rgba => {
  const primaryColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
  const hoverColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a - 0.2})`
  const activeColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a + 0.1})`
  return `
    html {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    body {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: rgba(0, 0, 0, 0.85);
    }
    abbr[title],
    abbr[data-original-title] {
      border-bottom: 0;
    }
    a {
      color: ${primaryColor};
      background-color: transparent;
    }
    a:hover {
      color: ${hoverColor};
    }
    a:active {
      color: ${activeColor};
    }
    a[disabled] {
      color: rgba(0, 0, 0, 0.25);
    }
    img {
      border-style: none;
    }
    table {
      border-collapse: collapse;
    }
    caption {
      color: rgba(0, 0, 0, 0.45);
    }
    input,
    button,
    select,
    optgroup,
    textarea {
      color: inherit;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
    }
    fieldset {
      border: 0;
    }
    legend {
      color: inherit;
    }
    mark {
      background-color: #feffe6;
    }
    ::selection {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-alert {
      color: rgba(0, 0, 0, 0.65);
      border-radius: 4px;
    }
    .ant-alert-success {
      border: 1px solid #b7eb8f;
      background-color: #f6ffed;
    }
    .ant-alert-success .ant-alert-icon {
      color: #52c41a;
    }
    .ant-alert-info {
      border: 1px solid #91d5ff;
      background-color: #f9f0ff;
    }
    .ant-alert-info .ant-alert-icon {
      color: ${primaryColor};
    }
    .ant-alert-warning {
      border: 1px solid #ffe58f;
      background-color: #fffbe6;
    }
    .ant-alert-warning .ant-alert-icon {
      color: #faad14;
    }
    .ant-alert-error {
      border: 1px solid #ffa39e;
      background-color: #fff1f0;
    }
    .ant-alert-error .ant-alert-icon {
      color: #f5222d;
    }
    .ant-alert-close-icon .anticon-cross {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-alert-close-icon .anticon-cross:hover {
      color: #404040;
    }
    .ant-alert-with-description {
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-alert-with-description .ant-alert-message {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-alert-banner {
      border-radius: 0;
      border: 0;
    }
    .ant-anchor {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-anchor-wrapper {
      background-color: #fff;
    }
    .ant-anchor-ink:before {
      background-color: #e8e8e8;
    }
    .ant-anchor-ink-ball {
      border-radius: 8px;
      border: 2px solid ${primaryColor};
      background-color: #fff;
    }
    .ant-anchor-link-title {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-anchor-link-active > .ant-anchor-link-title {
      color: ${primaryColor};
    }
    .ant-select-auto-complete {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-auto-complete.ant-select .ant-select-selection {
      border: 0;
      box-shadow: none;
    }
    .ant-select-auto-complete.ant-select .ant-input {
      background: transparent;
      border-width: 1px;
    }
    .ant-select-auto-complete.ant-select .ant-input:focus,
    .ant-select-auto-complete.ant-select .ant-input:hover {
      border-color: ${hoverColor};
    }
    .ant-avatar {
      color: rgba(0, 0, 0, 0.65);
      background: #ccc;
      color: #fff;
      border-radius: 16px;
    }
    .ant-avatar-lg {
      border-radius: 20px;
    }
    .ant-avatar-sm {
      border-radius: 12px;
    }
    .ant-avatar-square {
      border-radius: 4px;
    }
    .ant-back-top {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-back-top-content {
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.45);
      color: #fff;
    }
    .ant-back-top-content:hover {
      background-color: rgba(0, 0, 0, 0.65);
    }
    .ant-back-top-icon {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAABGdBTUEAALGPC/xhBQAAAbtJREFUWAntmMtKw0AUhhMvS5cuxILgQlRUpIggIoKIIoigG1eC+AA+jo+i6FIXBfeuXIgoeKVeitVWJX5HWhhDksnUpp3FDPyZk3Nm5nycmZKkXhAEOXSA3lG7muTeRzmfy6HneUvIhnYkQK+Q9NhAA0Opg0vBEhjBKHiyb8iGMyQMOYuK41BcBSypAL+MYXSKjtFAW7EAGEO3qN4uMQbbAkXiSfRQJ1H6a+yhlkKRcAoVFYiweYNjtCVQJJpBz2GCiPt7fBOZQpFgDpUikse5HgnkM4Fi4QX0Fpc5wf9EbLqpUCy4jMoJSXWhFwbMNgWKhVbRhy5jirhs9fy/oFhgHVVTJEs7RLZ8sSEoJm6iz7SZDMbJ+/OKERQTttCXQRLToRUmrKWCYuA2+jbN0MB4OQobYShfdTCgn/sL1K36M7TLrN3n+758aPy2rrpR6+/od5E8tf/A1uLS9aId5T7J3CNYihkQ4D9PiMdMC7mp4rjB9kjFjZp8BlnVHJBuO1yFXIV0FdDF3RlyFdJVQBdv5AxVdIsq8apiZ2PyYO1EVykesGfZEESsCkweyR8MUW+V8uJ1gkYipmpdP1pm2aJVPEGzAAAAAElFTkSuQmCC) 1% no-repeat;
    }
    /* .ant-badge {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-badge-count {
      border-radius: 10px;
      background: #f5222d;
      color: #fff;
      box-shadow: 0 0 0 1px #fff;
    }
    .ant-badge-count a,
    .ant-badge-count a:hover {
      color: #fff;
    }
    .ant-badge-dot {
      border-radius: 100%;
      background: #f5222d;
      box-shadow: 0 0 0 1px #fff;
    }
    .ant-badge-status-dot {
      border-radius: 50%;
    }
    .ant-badge-status-success {
      background-color: #52c41a;
    }
    .ant-badge-status-processing {
      background-color: ${primaryColor};
    }
    .ant-badge-status-processing:after {
      border-radius: 50%;
      border: 1px solid ${primaryColor};
    }
    .ant-badge-status-default {
      background-color: #d9d9d9;
    }
    .ant-badge-status-error {
      background-color: #f5222d;
    }
    .ant-badge-status-warning {
      background-color: #faad14;
    }
    .ant-badge-status-text {
      color: rgba(0, 0, 0, 0.65);
    } */
    .ant-breadcrumb {
      color: rgba(0, 0, 0, 0.65);
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-breadcrumb a {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-breadcrumb a:hover {
      color: ${hoverColor};
    }
    .ant-breadcrumb > span:last-child {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-breadcrumb-separator {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-btn {
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      border-color: #d9d9d9;
    }
    .ant-btn-lg {
      border-radius: 4px;
    }
    .ant-btn-sm {
      border-radius: 4px;
    }
    .ant-btn > a:only-child {
      color: currentColor;
    }
    .ant-btn > a:only-child:after {
      background: transparent;
    }
    .ant-btn:hover,
    .ant-btn:focus {
      color: ${hoverColor};
      background-color: #fff;
      border-color: ${hoverColor};
    }
    .ant-btn:hover > a:only-child,
    .ant-btn:focus > a:only-child {
      color: currentColor;
    }
    .ant-btn:hover > a:only-child:after,
    .ant-btn:focus > a:only-child:after {
      background: transparent;
    }
    .ant-btn:active,
    .ant-btn.active {
      color: ${activeColor};
      background-color: #fff;
      border-color: ${activeColor};
    }
    .ant-btn:active > a:only-child,
    .ant-btn.active > a:only-child {
      color: currentColor;
    }
    .ant-btn:active > a:only-child:after,
    .ant-btn.active > a:only-child:after {
      background: transparent;
    }
    .ant-btn.disabled,
    .ant-btn[disabled],
    .ant-btn.disabled:hover,
    .ant-btn[disabled]:hover,
    .ant-btn.disabled:focus,
    .ant-btn[disabled]:focus,
    .ant-btn.disabled:active,
    .ant-btn[disabled]:active,
    .ant-btn.disabled.active,
    .ant-btn[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn.disabled > a:only-child,
    .ant-btn[disabled] > a:only-child,
    .ant-btn.disabled:hover > a:only-child,
    .ant-btn[disabled]:hover > a:only-child,
    .ant-btn.disabled:focus > a:only-child,
    .ant-btn[disabled]:focus > a:only-child,
    .ant-btn.disabled:active > a:only-child,
    .ant-btn[disabled]:active > a:only-child,
    .ant-btn.disabled.active > a:only-child,
    .ant-btn[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-btn.disabled > a:only-child:after,
    .ant-btn[disabled] > a:only-child:after,
    .ant-btn.disabled:hover > a:only-child:after,
    .ant-btn[disabled]:hover > a:only-child:after,
    .ant-btn.disabled:focus > a:only-child:after,
    .ant-btn[disabled]:focus > a:only-child:after,
    .ant-btn.disabled:active > a:only-child:after,
    .ant-btn[disabled]:active > a:only-child:after,
    .ant-btn.disabled.active > a:only-child:after,
    .ant-btn[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-btn:hover,
    .ant-btn:focus,
    .ant-btn:active,
    .ant-btn.active {
      background: #fff;
    }
    .ant-btn-primary {
      color: #fff;
      background-color: ${primaryColor};
      border-color: ${primaryColor};
    }
    .ant-btn-primary > a:only-child {
      color: currentColor;
    }
    .ant-btn-primary > a:only-child:after {
      background: transparent;
    }
    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
      color: #fff;
      background-color: ${hoverColor};
      border-color: ${hoverColor};
    }
    .ant-btn-primary:hover > a:only-child,
    .ant-btn-primary:focus > a:only-child {
      color: currentColor;
    }
    .ant-btn-primary:hover > a:only-child:after,
    .ant-btn-primary:focus > a:only-child:after {
      background: transparent;
    }
    .ant-btn-primary:active,
    .ant-btn-primary.active {
      color: #fff;
      background-color: ${activeColor};
      border-color: ${activeColor};
    }
    .ant-btn-primary:active > a:only-child,
    .ant-btn-primary.active > a:only-child {
      color: currentColor;
    }
    .ant-btn-primary:active > a:only-child:after,
    .ant-btn-primary.active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-primary.disabled,
    .ant-btn-primary[disabled],
    .ant-btn-primary.disabled:hover,
    .ant-btn-primary[disabled]:hover,
    .ant-btn-primary.disabled:focus,
    .ant-btn-primary[disabled]:focus,
    .ant-btn-primary.disabled:active,
    .ant-btn-primary[disabled]:active,
    .ant-btn-primary.disabled.active,
    .ant-btn-primary[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn-primary.disabled > a:only-child,
    .ant-btn-primary[disabled] > a:only-child,
    .ant-btn-primary.disabled:hover > a:only-child,
    .ant-btn-primary[disabled]:hover > a:only-child,
    .ant-btn-primary.disabled:focus > a:only-child,
    .ant-btn-primary[disabled]:focus > a:only-child,
    .ant-btn-primary.disabled:active > a:only-child,
    .ant-btn-primary[disabled]:active > a:only-child,
    .ant-btn-primary.disabled.active > a:only-child,
    .ant-btn-primary[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-btn-primary.disabled > a:only-child:after,
    .ant-btn-primary[disabled] > a:only-child:after,
    .ant-btn-primary.disabled:hover > a:only-child:after,
    .ant-btn-primary[disabled]:hover > a:only-child:after,
    .ant-btn-primary.disabled:focus > a:only-child:after,
    .ant-btn-primary[disabled]:focus > a:only-child:after,
    .ant-btn-primary.disabled:active > a:only-child:after,
    .ant-btn-primary[disabled]:active > a:only-child:after,
    .ant-btn-primary.disabled.active > a:only-child:after,
    .ant-btn-primary[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child) {
      border-right-color: ${hoverColor};
      border-left-color: ${hoverColor};
    }
    .ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child):disabled {
      border-color: #d9d9d9;
    }
    .ant-btn-group .ant-btn-primary:first-child:not(:last-child) {
      border-right-color: ${hoverColor};
    }
    .ant-btn-group .ant-btn-primary:first-child:not(:last-child)[disabled] {
      border-right-color: #d9d9d9;
    }
    .ant-btn-group .ant-btn-primary:last-child:not(:first-child),
    .ant-btn-group .ant-btn-primary + .ant-btn-primary {
      border-left-color: ${hoverColor};
    }
    .ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled],
    .ant-btn-group .ant-btn-primary + .ant-btn-primary[disabled] {
      border-left-color: #d9d9d9;
    }
    .ant-btn-ghost {
      color: rgba(0, 0, 0, 0.65);
      background-color: transparent;
      border-color: #d9d9d9;
    }
    .ant-btn-ghost > a:only-child {
      color: currentColor;
    }
    .ant-btn-ghost > a:only-child:after {
      background: transparent;
    }
    .ant-btn-ghost:hover,
    .ant-btn-ghost:focus {
      color: ${hoverColor};
      background-color: transparent;
      border-color: ${hoverColor};
    }
    .ant-btn-ghost:hover > a:only-child,
    .ant-btn-ghost:focus > a:only-child {
      color: currentColor;
    }
    .ant-btn-ghost:hover > a:only-child:after,
    .ant-btn-ghost:focus > a:only-child:after {
      background: transparent;
    }
    .ant-btn-ghost:active,
    .ant-btn-ghost.active {
      color: ${activeColor};
      background-color: transparent;
      border-color: ${activeColor};
    }
    .ant-btn-ghost:active > a:only-child,
    .ant-btn-ghost.active > a:only-child {
      color: currentColor;
    }
    .ant-btn-ghost:active > a:only-child:after,
    .ant-btn-ghost.active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-ghost.disabled,
    .ant-btn-ghost[disabled],
    .ant-btn-ghost.disabled:hover,
    .ant-btn-ghost[disabled]:hover,
    .ant-btn-ghost.disabled:focus,
    .ant-btn-ghost[disabled]:focus,
    .ant-btn-ghost.disabled:active,
    .ant-btn-ghost[disabled]:active,
    .ant-btn-ghost.disabled.active,
    .ant-btn-ghost[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn-ghost.disabled > a:only-child,
    .ant-btn-ghost[disabled] > a:only-child,
    .ant-btn-ghost.disabled:hover > a:only-child,
    .ant-btn-ghost[disabled]:hover > a:only-child,
    .ant-btn-ghost.disabled:focus > a:only-child,
    .ant-btn-ghost[disabled]:focus > a:only-child,
    .ant-btn-ghost.disabled:active > a:only-child,
    .ant-btn-ghost[disabled]:active > a:only-child,
    .ant-btn-ghost.disabled.active > a:only-child,
    .ant-btn-ghost[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-btn-ghost.disabled > a:only-child:after,
    .ant-btn-ghost[disabled] > a:only-child:after,
    .ant-btn-ghost.disabled:hover > a:only-child:after,
    .ant-btn-ghost[disabled]:hover > a:only-child:after,
    .ant-btn-ghost.disabled:focus > a:only-child:after,
    .ant-btn-ghost[disabled]:focus > a:only-child:after,
    .ant-btn-ghost.disabled:active > a:only-child:after,
    .ant-btn-ghost[disabled]:active > a:only-child:after,
    .ant-btn-ghost.disabled.active > a:only-child:after,
    .ant-btn-ghost[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-dashed {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      border-color: #d9d9d9;
      border-style: dashed;
    }
    .ant-btn-dashed > a:only-child {
      color: currentColor;
    }
    .ant-btn-dashed > a:only-child:after {
      background: transparent;
    }
    .ant-btn-dashed:hover,
    .ant-btn-dashed:focus {
      color: ${hoverColor};
      background-color: #fff;
      border-color: ${hoverColor};
    }
    .ant-btn-dashed:hover > a:only-child,
    .ant-btn-dashed:focus > a:only-child {
      color: currentColor;
    }
    .ant-btn-dashed:hover > a:only-child:after,
    .ant-btn-dashed:focus > a:only-child:after {
      background: transparent;
    }
    .ant-btn-dashed:active,
    .ant-btn-dashed.active {
      color: ${activeColor};
      background-color: #fff;
      border-color: ${activeColor};
    }
    .ant-btn-dashed:active > a:only-child,
    .ant-btn-dashed.active > a:only-child {
      color: currentColor;
    }
    .ant-btn-dashed:active > a:only-child:after,
    .ant-btn-dashed.active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-dashed.disabled,
    .ant-btn-dashed[disabled],
    .ant-btn-dashed.disabled:hover,
    .ant-btn-dashed[disabled]:hover,
    .ant-btn-dashed.disabled:focus,
    .ant-btn-dashed[disabled]:focus,
    .ant-btn-dashed.disabled:active,
    .ant-btn-dashed[disabled]:active,
    .ant-btn-dashed.disabled.active,
    .ant-btn-dashed[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn-dashed.disabled > a:only-child,
    .ant-btn-dashed[disabled] > a:only-child,
    .ant-btn-dashed.disabled:hover > a:only-child,
    .ant-btn-dashed[disabled]:hover > a:only-child,
    .ant-btn-dashed.disabled:focus > a:only-child,
    .ant-btn-dashed[disabled]:focus > a:only-child,
    .ant-btn-dashed.disabled:active > a:only-child,
    .ant-btn-dashed[disabled]:active > a:only-child,
    .ant-btn-dashed.disabled.active > a:only-child,
    .ant-btn-dashed[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-btn-dashed.disabled > a:only-child:after,
    .ant-btn-dashed[disabled] > a:only-child:after,
    .ant-btn-dashed.disabled:hover > a:only-child:after,
    .ant-btn-dashed[disabled]:hover > a:only-child:after,
    .ant-btn-dashed.disabled:focus > a:only-child:after,
    .ant-btn-dashed[disabled]:focus > a:only-child:after,
    .ant-btn-dashed.disabled:active > a:only-child:after,
    .ant-btn-dashed[disabled]:active > a:only-child:after,
    .ant-btn-dashed.disabled.active > a:only-child:after,
    .ant-btn-dashed[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-danger {
      color: #f5222d;
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn-danger > a:only-child {
      color: currentColor;
    }
    .ant-btn-danger > a:only-child:after {
      background: transparent;
    }
    .ant-btn-danger:hover,
    .ant-btn-danger:focus {
      color: #fff;
      background-color: #ff4d4f;
      border-color: #ff4d4f;
    }
    .ant-btn-danger:hover > a:only-child,
    .ant-btn-danger:focus > a:only-child {
      color: currentColor;
    }
    .ant-btn-danger:hover > a:only-child:after,
    .ant-btn-danger:focus > a:only-child:after {
      background: transparent;
    }
    .ant-btn-danger:active,
    .ant-btn-danger.active {
      color: #fff;
      background-color: #cf1322;
      border-color: #cf1322;
    }
    .ant-btn-danger:active > a:only-child,
    .ant-btn-danger.active > a:only-child {
      color: currentColor;
    }
    .ant-btn-danger:active > a:only-child:after,
    .ant-btn-danger.active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-danger.disabled,
    .ant-btn-danger[disabled],
    .ant-btn-danger.disabled:hover,
    .ant-btn-danger[disabled]:hover,
    .ant-btn-danger.disabled:focus,
    .ant-btn-danger[disabled]:focus,
    .ant-btn-danger.disabled:active,
    .ant-btn-danger[disabled]:active,
    .ant-btn-danger.disabled.active,
    .ant-btn-danger[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn-danger.disabled > a:only-child,
    .ant-btn-danger[disabled] > a:only-child,
    .ant-btn-danger.disabled:hover > a:only-child,
    .ant-btn-danger[disabled]:hover > a:only-child,
    .ant-btn-danger.disabled:focus > a:only-child,
    .ant-btn-danger[disabled]:focus > a:only-child,
    .ant-btn-danger.disabled:active > a:only-child,
    .ant-btn-danger[disabled]:active > a:only-child,
    .ant-btn-danger.disabled.active > a:only-child,
    .ant-btn-danger[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-btn-danger.disabled > a:only-child:after,
    .ant-btn-danger[disabled] > a:only-child:after,
    .ant-btn-danger.disabled:hover > a:only-child:after,
    .ant-btn-danger[disabled]:hover > a:only-child:after,
    .ant-btn-danger.disabled:focus > a:only-child:after,
    .ant-btn-danger[disabled]:focus > a:only-child:after,
    .ant-btn-danger.disabled:active > a:only-child:after,
    .ant-btn-danger[disabled]:active > a:only-child:after,
    .ant-btn-danger.disabled.active > a:only-child:after,
    .ant-btn-danger[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-circle,
    .ant-btn-circle-outline {
      border-radius: 50%;
    }
    .ant-btn-circle.ant-btn-lg,
    .ant-btn-circle-outline.ant-btn-lg {
      border-radius: 50%;
    }
    .ant-btn-circle.ant-btn-sm,
    .ant-btn-circle-outline.ant-btn-sm {
      border-radius: 50%;
    }
    .ant-btn:before {
      background: #fff;
      border-radius: inherit;
    }
    .ant-btn-group-lg > .ant-btn {
      border-radius: 4px;
    }
    .ant-btn-group-sm > .ant-btn {
      border-radius: 4px;
    }
    .ant-btn-group .ant-btn:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    .ant-btn-group > .ant-btn:first-child:not(:last-child) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-btn-group > .ant-btn:last-child:not(:first-child) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-btn-group > .ant-btn-group:not(:first-child):not(:last-child) > .ant-btn {
      border-radius: 0;
    }
    .ant-btn-group > .ant-btn-group:first-child:not(:last-child) > .ant-btn:last-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-btn-group > .ant-btn-group:last-child:not(:first-child) > .ant-btn:first-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-btn-clicked:after {
      border-radius: inherit;
      border: 0 solid ${primaryColor};
    }
    .ant-btn-danger.ant-btn-clicked:after {
      border-color: #f5222d;
    }
    .ant-btn-background-ghost {
      background: transparent !important;
      border-color: #fff;
      color: #fff;
    }
    .ant-btn-background-ghost.ant-btn-primary {
      color: ${primaryColor};
      background-color: transparent;
      border-color: ${primaryColor};
    }
    .ant-btn-background-ghost.ant-btn-primary > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-primary > a:only-child:after {
      background: transparent;
    }
    .ant-btn-background-ghost.ant-btn-primary:hover,
    .ant-btn-background-ghost.ant-btn-primary:focus {
      color: ${hoverColor};
      background-color: transparent;
      border-color: ${hoverColor};
    }
    .ant-btn-background-ghost.ant-btn-primary:hover > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary:focus > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-primary:hover > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary:focus > a:only-child:after {
      background: transparent;
    }
    .ant-btn-background-ghost.ant-btn-primary:active,
    .ant-btn-background-ghost.ant-btn-primary.active {
      color: ${activeColor};
      background-color: transparent;
      border-color: ${activeColor};
    }
    .ant-btn-background-ghost.ant-btn-primary:active > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary.active > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-primary:active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary.active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-background-ghost.ant-btn-primary.disabled,
    .ant-btn-background-ghost.ant-btn-primary[disabled],
    .ant-btn-background-ghost.ant-btn-primary.disabled:hover,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:hover,
    .ant-btn-background-ghost.ant-btn-primary.disabled:focus,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:focus,
    .ant-btn-background-ghost.ant-btn-primary.disabled:active,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:active,
    .ant-btn-background-ghost.ant-btn-primary.disabled.active,
    .ant-btn-background-ghost.ant-btn-primary[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn-background-ghost.ant-btn-primary.disabled > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary[disabled] > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary.disabled:hover > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:hover > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary.disabled:focus > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:focus > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary.disabled:active > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:active > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary.disabled.active > a:only-child,
    .ant-btn-background-ghost.ant-btn-primary[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-primary.disabled > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary[disabled] > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary.disabled:hover > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:hover > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary.disabled:focus > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:focus > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary.disabled:active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary[disabled]:active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary.disabled.active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-primary[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-background-ghost.ant-btn-danger {
      color: #f5222d;
      background-color: transparent;
      border-color: #f5222d;
    }
    .ant-btn-background-ghost.ant-btn-danger > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-danger > a:only-child:after {
      background: transparent;
    }
    .ant-btn-background-ghost.ant-btn-danger:hover,
    .ant-btn-background-ghost.ant-btn-danger:focus {
      color: #ff4d4f;
      background-color: transparent;
      border-color: #ff4d4f;
    }
    .ant-btn-background-ghost.ant-btn-danger:hover > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger:focus > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-danger:hover > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger:focus > a:only-child:after {
      background: transparent;
    }
    .ant-btn-background-ghost.ant-btn-danger:active,
    .ant-btn-background-ghost.ant-btn-danger.active {
      color: #cf1322;
      background-color: transparent;
      border-color: #cf1322;
    }
    .ant-btn-background-ghost.ant-btn-danger:active > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger.active > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-danger:active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger.active > a:only-child:after {
      background: transparent;
    }
    .ant-btn-background-ghost.ant-btn-danger.disabled,
    .ant-btn-background-ghost.ant-btn-danger[disabled],
    .ant-btn-background-ghost.ant-btn-danger.disabled:hover,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:hover,
    .ant-btn-background-ghost.ant-btn-danger.disabled:focus,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:focus,
    .ant-btn-background-ghost.ant-btn-danger.disabled:active,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:active,
    .ant-btn-background-ghost.ant-btn-danger.disabled.active,
    .ant-btn-background-ghost.ant-btn-danger[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-btn-background-ghost.ant-btn-danger.disabled > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger[disabled] > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger.disabled:hover > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:hover > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger.disabled:focus > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:focus > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger.disabled:active > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:active > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger.disabled.active > a:only-child,
    .ant-btn-background-ghost.ant-btn-danger[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-btn-background-ghost.ant-btn-danger.disabled > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger[disabled] > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger.disabled:hover > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:hover > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger.disabled:focus > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:focus > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger.disabled:active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger[disabled]:active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger.disabled.active > a:only-child:after,
    .ant-btn-background-ghost.ant-btn-danger[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-fullcalendar {
      color: rgba(0, 0, 0, 0.65);
      border-top: 1px solid #d9d9d9;
    }
    .ant-fullcalendar table {
      border-collapse: collapse;
      background-color: transparent;
    }
    .ant-fullcalendar table,
    .ant-fullcalendar th,
    .ant-fullcalendar td {
      border: 0;
    }
    .ant-fullcalendar-calendar-table {
      border-spacing: 0;
    }
    .ant-fullcalendar-value {
      color: rgba(0, 0, 0, 0.65);
      border-radius: 2px;
      background: transparent;
    }
    .ant-fullcalendar-value:hover {
      background: #f9f0ff;
    }
    .ant-fullcalendar-value:active {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-fullcalendar-today .ant-fullcalendar-value,
    .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {
      box-shadow: 0 0 0 1px ${primaryColor} inset;
    }
    .ant-fullcalendar-selected-day .ant-fullcalendar-value,
    .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-fullcalendar-disabled-cell-first-of-row .ant-fullcalendar-value {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .ant-fullcalendar-disabled-cell-last-of-row .ant-fullcalendar-value {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .ant-fullcalendar-last-month-cell .ant-fullcalendar-value,
    .ant-fullcalendar-next-month-btn-day .ant-fullcalendar-value {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-fullcalendar-month-panel-table {
      border-collapse: separate;
    }
    .ant-fullcalendar-fullscreen {
      border-top: 0;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
      color: rgba(0, 0, 0, 0.65);
      border-top: 2px solid #e8e8e8;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month:hover,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-date:hover {
      background: #f9f0ff;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month:active,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-date:active {
      background: #efdbff;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-value {
      background: transparent;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-value {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-month,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-date {
      border-top-color: ${primaryColor};
      background: transparent;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-value {
      box-shadow: none;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-month,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-date {
      background: #f9f0ff;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-value {
      color: ${primaryColor};
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-last-month-cell .ant-fullcalendar-date,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-next-month-btn-day .ant-fullcalendar-date {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-fullcalendar-disabled-cell:not(.ant-fullcalendar-today) .ant-fullcalendar-date,
    .ant-fullcalendar-disabled-cell:not(.ant-fullcalendar-today) .ant-fullcalendar-date:hover {
      background: transparent;
    }
    .ant-fullcalendar-disabled-cell .ant-fullcalendar-value {
      color: rgba(0, 0, 0, 0.25);
      border-radius: 0;
    }
    .ant-card {
      color: rgba(0, 0, 0, 0.65);
      background: #fff;
      border-radius: 2px;
    }
    .ant-card-hoverable:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
      border-color: rgba(0, 0, 0, 0.09);
    }
    .ant-card-bordered {
      border: 1px solid #e8e8e8;
    }
    .ant-card-head {
      background: #fff;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 2px 2px 0 0;
    }
    .ant-card-head-title {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-card-head .ant-tabs-bar {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-card-grid {
      border-radius: 0;
      border: 0;
      box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, 1px 0 0 0 #e8e8e8 inset, 0 1px 0 0 #e8e8e8 inset;
    }
    .ant-card-grid:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .ant-card-actions {
      border-top: 1px solid #e8e8e8;
      background: #fafafa;
    }
    .ant-card-actions > li {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-card-actions > li > span:hover {
      color: ${primaryColor};
    }
    .ant-card-actions > li > span a {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-card-actions > li > span a:hover {
      color: ${primaryColor};
    }
    .ant-card-actions > li:not(:last-child) {
      border-right: 1px solid #e8e8e8;
    }
    .ant-card-type-inner .ant-card-head {
      background: #fafafa;
    }
    .ant-card-meta-title {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-card-meta-description {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-card-loading-block {
      border-radius: 2px;
      background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
      background-size: 600% 600%;
    }
    .ant-carousel {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-carousel .slick-slider {
      -webkit-tap-highlight-color: transparent;
    }
    .ant-carousel .slick-vertical .slick-slide {
      border: 1px solid transparent;
    }
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      background: transparent;
      color: transparent;
      border: 0;
    }
    .ant-carousel .slick-prev:hover,
    .ant-carousel .slick-next:hover,
    .ant-carousel .slick-prev:focus,
    .ant-carousel .slick-next:focus {
      background: transparent;
      color: transparent;
    }
    .ant-carousel .slick-dots li button {
      border: 0;
      background: #fff;
      border-radius: 1px;
      color: transparent;
    }
    .ant-carousel .slick-dots li.slick-active button {
      background: #fff;
    }
    .ant-cascader {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-cascader-input.ant-input {
      background-color: transparent !important;
    }
    .ant-cascader-picker {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      border-radius: 4px;
    }
    .ant-cascader-picker-with-value .ant-cascader-picker-label {
      color: transparent;
    }
    .ant-cascader-picker-disabled {
      background: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-cascader-picker:focus .ant-cascader-input {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-cascader-picker-clear {
      background: #fff;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-cascader-picker-clear:hover {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-cascader-picker-arrow {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-cascader-menus {
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .ant-cascader-menu {
      border-right: 1px solid #e8e8e8;
    }
    .ant-cascader-menu:first-child {
      border-radius: 4px 0 0 4px;
    }
    .ant-cascader-menu:last-child {
      border-right-color: transparent;
      border-radius: 0 4px 4px 0;
    }
    .ant-cascader-menu:only-child {
      border-radius: 4px;
    }
    .ant-cascader-menu-item:hover {
      background: #f9f0ff;
    }
    .ant-cascader-menu-item-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-cascader-menu-item-disabled:hover {
      background: transparent;
    }
    .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled),
    .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover {
      background: #f5f5f5;
    }
    .ant-cascader-menu-item-expand:after {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-cascader-menu-item .ant-cascader-menu-item-keyword {
      color: #f5222d;
    }
    .ant-checkbox {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${primaryColor};
    }
    .ant-checkbox-checked:after {
      border-radius: 2px;
      border: 1px solid ${primaryColor};
    }
    .ant-checkbox-inner {
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      background-color: #fff;
    }
    .ant-checkbox-inner:after {
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }
    .ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner:after {
      border-color: rgba(0, 0, 0, 0.25);
    }
    .ant-checkbox-checked .ant-checkbox-inner:after {
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${primaryColor};
      border-color: ${primaryColor};
    }
    .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner:after {
      border-color: rgba(0, 0, 0, 0.25);
    }
    .ant-checkbox-disabled .ant-checkbox-inner {
      border-color: #d9d9d9 !important;
      background-color: #f5f5f5;
    }
    .ant-checkbox-disabled .ant-checkbox-inner:after {
      border-color: #f5f5f5;
    }
    .ant-checkbox-disabled + span {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-checkbox-wrapper {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-checkbox-group {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-collapse {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fafafa;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      border-bottom: 0;
    }
    .ant-collapse > .ant-collapse-item {
      border-bottom: 1px solid #d9d9d9;
    }
    .ant-collapse > .ant-collapse-item:last-child,
    .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
      border-radius: 0 0 4px 4px;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-collapse-content {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      border-top: 1px solid #d9d9d9;
    }
    .ant-collapse-item:last-child > .ant-collapse-content {
      border-radius: 0 0 4px 4px;
    }
    .ant-collapse-borderless {
      background-color: #fff;
      border: 0;
    }
    .ant-collapse-borderless > .ant-collapse-item {
      border-bottom: 1px solid #d9d9d9;
    }
    .ant-collapse-borderless > .ant-collapse-item:last-child,
    .ant-collapse-borderless > .ant-collapse-item:last-child .ant-collapse-header {
      border-radius: 0;
    }
    .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
      background-color: transparent;
      border-top: 0;
    }
    .ant-collapse .ant-collapse-item-disabled > .ant-collapse-header,
    .ant-collapse .ant-collapse-item-disabled > .ant-collapse-header > .arrow {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-picker-container {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-calendar-picker {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled) {
      border-color: ${primaryColor};
    }
    .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled) {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-calendar-picker-clear {
      color: rgba(0, 0, 0, 0.25);
      background: #fff;
    }
    .ant-calendar-picker-clear:hover {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-picker-icon {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-picker-icon:after {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar {
      border: 1px solid #fff;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
    }
    .ant-calendar-input-wrap {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-input {
      border: 0;
      color: rgba(0, 0, 0, 0.65);
      background: #fff;
    }
    .ant-calendar-input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-header {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-header a:hover {
      color: ${hoverColor};
    }
    .ant-calendar-header .ant-calendar-century-select,
    .ant-calendar-header .ant-calendar-decade-select,
    .ant-calendar-header .ant-calendar-year-select,
    .ant-calendar-header .ant-calendar-month-select {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-calendar-header .ant-calendar-prev-century-btn,
    .ant-calendar-header .ant-calendar-next-century-btn,
    .ant-calendar-header .ant-calendar-prev-decade-btn,
    .ant-calendar-header .ant-calendar-next-decade-btn,
    .ant-calendar-header .ant-calendar-prev-month-btn,
    .ant-calendar-header .ant-calendar-next-month-btn,
    .ant-calendar-header .ant-calendar-prev-year-btn,
    .ant-calendar-header .ant-calendar-next-year-btn {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar table {
      border-collapse: collapse;
      background-color: transparent;
    }
    .ant-calendar table,
    .ant-calendar th,
    .ant-calendar td {
      border: 0;
    }
    .ant-calendar-calendar-table {
      border-spacing: 0;
    }
    .ant-calendar-date {
      color: rgba(0, 0, 0, 0.65);
      border-radius: 2px;
      border: 1px solid transparent;
      background: transparent;
    }
    .ant-calendar-date:hover {
      background: #f9f0ff;
    }
    .ant-calendar-date:active {
      color: #fff;
      background: ${hoverColor};
    }
    .ant-calendar-today .ant-calendar-date {
      border-color: ${primaryColor};
      color: ${primaryColor};
    }
    .ant-calendar-last-month-cell .ant-calendar-date,
    .ant-calendar-next-month-btn-day .ant-calendar-date {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-selected-day .ant-calendar-date {
      background: ${primaryColor};
      color: #fff;
      border: 1px solid transparent;
    }
    .ant-calendar-selected-day .ant-calendar-date:hover {
      background: ${primaryColor};
    }
    .ant-calendar-disabled-cell .ant-calendar-date {
      color: #bcbcbc;
      background: #f5f5f5;
      border-radius: 0;
      border: 1px solid transparent;
    }
    .ant-calendar-disabled-cell .ant-calendar-date:hover {
      background: #f5f5f5;
    }
    .ant-calendar-disabled-cell.ant-calendar-today .ant-calendar-date:before {
      border: 1px solid #bcbcbc;
      border-radius: 2px;
    }
    .ant-calendar-disabled-cell-first-of-row .ant-calendar-date {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .ant-calendar-disabled-cell-last-of-row .ant-calendar-date {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .ant-calendar-footer {
      border-top: 1px solid #e8e8e8;
    }
    .ant-calendar-footer:empty {
      border-top: 0;
    }
    .ant-calendar-footer-extra + .ant-calendar-footer-btn {
      border-top: 1px solid #e8e8e8;
    }
    .ant-calendar .ant-calendar-today-btn-disabled,
    .ant-calendar .ant-calendar-clear-btn-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar .ant-calendar-clear-btn:after {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar .ant-calendar-clear-btn:hover:after {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar .ant-calendar-ok-btn {
      background-image: none;
      border: 1px solid transparent;
      color: #fff;
      background-color: ${primaryColor};
      border-color: ${primaryColor};
      border-radius: 4px;
    }
    .ant-calendar .ant-calendar-ok-btn-lg {
      border-radius: 4px;
    }
    .ant-calendar .ant-calendar-ok-btn-sm {
      border-radius: 4px;
    }
    .ant-calendar .ant-calendar-ok-btn > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn > a:only-child:after {
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn:hover,
    .ant-calendar .ant-calendar-ok-btn:focus {
      color: #fff;
      background-color: ${hoverColor};
      border-color: ${hoverColor};
    }
    .ant-calendar .ant-calendar-ok-btn:hover > a:only-child,
    .ant-calendar .ant-calendar-ok-btn:focus > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn:hover > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn:focus > a:only-child:after {
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn:active,
    .ant-calendar .ant-calendar-ok-btn.active {
      color: #fff;
      background-color: ${activeColor};
      border-color: ${activeColor};
    }
    .ant-calendar .ant-calendar-ok-btn:active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.active > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn:active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.active > a:only-child:after {
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled,
    .ant-calendar .ant-calendar-ok-btn[disabled],
    .ant-calendar .ant-calendar-ok-btn.disabled:hover,
    .ant-calendar .ant-calendar-ok-btn[disabled]:hover,
    .ant-calendar .ant-calendar-ok-btn.disabled:focus,
    .ant-calendar .ant-calendar-ok-btn[disabled]:focus,
    .ant-calendar .ant-calendar-ok-btn.disabled:active,
    .ant-calendar .ant-calendar-ok-btn[disabled]:active,
    .ant-calendar .ant-calendar-ok-btn.disabled.active,
    .ant-calendar .ant-calendar-ok-btn[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child:after {
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled > a:only-child:after {
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child:after {
      background: transparent;
    }
    .ant-calendar-range-picker-input {
      background-color: transparent;
      border: 0;
    }
    .ant-calendar-range-picker-input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range-picker-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range-picker-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range-picker-separator {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-range-left .ant-calendar-time-picker-inner {
      border-right: 1.5px solid #e8e8e8;
    }
    .ant-calendar-range-right .ant-calendar-time-picker-inner {
      border-left: 1.5px solid #e8e8e8;
    }
    .ant-calendar-range-middle {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-range .ant-calendar-input,
    .ant-calendar-range .ant-calendar-time-picker-input {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      border: 0;
      box-shadow: none;
    }
    .ant-calendar-range .ant-calendar-input::-moz-placeholder,
    .ant-calendar-range .ant-calendar-time-picker-input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range .ant-calendar-input:-ms-input-placeholder,
    .ant-calendar-range .ant-calendar-time-picker-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range .ant-calendar-input::-webkit-input-placeholder,
    .ant-calendar-range .ant-calendar-time-picker-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range .ant-calendar-input:hover,
    .ant-calendar-range .ant-calendar-time-picker-input:hover {
      border-color: ${hoverColor};
    }
    .ant-calendar-range .ant-calendar-input:focus,
    .ant-calendar-range .ant-calendar-time-picker-input:focus {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-calendar-range .ant-calendar-input-disabled,
    .ant-calendar-range .ant-calendar-time-picker-input-disabled {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-range .ant-calendar-input-disabled:hover,
    .ant-calendar-range .ant-calendar-time-picker-input-disabled:hover {
      border-color: #e6d8d8;
    }
    .ant-calendar-range .ant-calendar-input:focus,
    .ant-calendar-range .ant-calendar-time-picker-input:focus {
      box-shadow: none;
    }
    .ant-calendar-range .ant-calendar-in-range-cell {
      border-radius: 0;
    }
    .ant-calendar-range .ant-calendar-in-range-cell:before {
      background: #f9f0ff;
      border-radius: 0;
      border: 0;
    }
    .ant-calendar-range .ant-calendar-header,
    .ant-calendar-range .ant-calendar-month-panel-header,
    .ant-calendar-range .ant-calendar-year-panel-header {
      border-bottom: 0;
    }
    .ant-calendar-range .ant-calendar-body,
    .ant-calendar-range .ant-calendar-month-panel-body,
    .ant-calendar-range .ant-calendar-year-panel-body {
      border-top: 1px solid #e8e8e8;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-inner {
      background: none;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-combobox {
      background-color: #fff;
      border-top: 1px solid #e8e8e8;
    }
    .ant-calendar-range.ant-calendar-show-time-picker .ant-calendar-body {
      border-top-color: transparent;
    }
    .ant-calendar-time-picker {
      background-color: #fff;
    }
    .ant-calendar-time-picker-inner {
      background-color: #fff;
      background-clip: padding-box;
    }
    .ant-calendar-time-picker-select {
      border-right: 1px solid #e8e8e8;
    }
    .ant-calendar-time-picker-select:first-child {
      border-left: 0;
    }
    .ant-calendar-time-picker-select:last-child {
      border-right: 0;
    }
    .ant-calendar-time-picker-select li:hover {
      background: #f9f0ff;
    }
    li.ant-calendar-time-picker-select-option-selected {
      background: #f5f5f5;
    }
    li.ant-calendar-time-picker-select-option-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    li.ant-calendar-time-picker-select-option-disabled:hover {
      background: transparent;
    }
    .ant-calendar-time .ant-calendar-day-select {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-month-panel {
      border-radius: 4px;
      background: #fff;
    }
    .ant-calendar-month-panel-header {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-month-panel-header a:hover {
      color: ${hoverColor};
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-century-select,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-decade-select,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-year-select,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-month-select {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-month-panel-table {
      border-collapse: separate;
    }
    .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month:hover {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month,
    .ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month:hover {
      color: #bcbcbc;
      background: #f5f5f5;
    }
    .ant-calendar-month-panel-month {
      color: rgba(0, 0, 0, 0.65);
      background: transparent;
      border-radius: 2px;
    }
    .ant-calendar-month-panel-month:hover {
      background: #f9f0ff;
    }
    .ant-calendar-year-panel {
      border-radius: 4px;
      background: #fff;
    }
    .ant-calendar-year-panel-header {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-year-panel-header a:hover {
      color: ${hoverColor};
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-century-select,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-decade-select,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-year-select,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-month-select {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-year-panel-table {
      border-collapse: separate;
    }
    .ant-calendar-year-panel-year {
      color: rgba(0, 0, 0, 0.65);
      background: transparent;
      border-radius: 2px;
    }
    .ant-calendar-year-panel-year:hover {
      background: #f9f0ff;
    }
    .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-calendar-year-panel-last-decade-cell .ant-calendar-year-panel-year,
    .ant-calendar-year-panel-next-decade-cell .ant-calendar-year-panel-year {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-decade-panel {
      background: #fff;
      border-radius: 4px;
    }
    .ant-calendar-decade-panel-header {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-decade-panel-header a:hover {
      color: ${hoverColor};
    }
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-century-select,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-decade-select,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-year-select,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-month-select {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-decade-panel-table {
      border-collapse: separate;
    }
    .ant-calendar-decade-panel-decade {
      color: rgba(0, 0, 0, 0.65);
      background: transparent;
      border-radius: 2px;
    }
    .ant-calendar-decade-panel-decade:hover {
      background: #f9f0ff;
    }
    .ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade:hover {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-calendar-decade-panel-last-century-cell .ant-calendar-decade-panel-decade,
    .ant-calendar-decade-panel-next-century-cell .ant-calendar-decade-panel-decade {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-week-number .ant-calendar-body tr:hover {
      background: #f9f0ff;
    }
    .ant-calendar-week-number .ant-calendar-body tr.ant-calendar-active-week {
      background: #efdbff;
    }
    .ant-calendar-week-number .ant-calendar-body tr .ant-calendar-selected-day .ant-calendar-date,
    .ant-calendar-week-number .ant-calendar-body tr .ant-calendar-selected-day:hover .ant-calendar-date {
      background: transparent;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-divider {
      color: rgba(0, 0, 0, 0.65);
      background: #e8e8e8;
    }
    .ant-divider-horizontal.ant-divider-with-text {
      background: transparent;
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-divider-horizontal.ant-divider-with-text:before,
    .ant-divider-horizontal.ant-divider-with-text:after {
      border-top: 1px solid #e8e8e8;
    }
    .ant-divider-dashed {
      background: none;
      border-top: 1px dashed #e8e8e8;
    }
    .ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed {
      border-top: 0;
    }
    .ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:before,
    .ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:after {
      border-style: dashed none none;
    }
    .ant-dropdown {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-dropdown-menu {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
    }
    .ant-dropdown-menu-item-group-title {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-dropdown-menu-item > a,
    .ant-dropdown-menu-submenu-title > a {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-dropdown-menu-item-selected,
    .ant-dropdown-menu-submenu-title-selected,
    .ant-dropdown-menu-item-selected > a,
    .ant-dropdown-menu-submenu-title-selected > a {
      color: ${primaryColor};
      background-color: #f9f0ff;
    }
    .ant-dropdown-menu-item:hover,
    .ant-dropdown-menu-submenu-title:hover {
      background-color: #f9f0ff;
    }
    .ant-dropdown-menu-item-disabled,
    .ant-dropdown-menu-submenu-title-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-dropdown-menu-item-disabled:hover,
    .ant-dropdown-menu-submenu-title-disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #fff;
    }
    .ant-dropdown-menu-item:first-child,
    .ant-dropdown-menu-submenu-title:first-child,
    .ant-dropdown-menu-item:first-child > a,
    .ant-dropdown-menu-submenu-title:first-child > a {
      border-radius: 4px 4px 0 0;
    }
    .ant-dropdown-menu-item:last-child,
    .ant-dropdown-menu-submenu-title:last-child,
    .ant-dropdown-menu-item:last-child > a,
    .ant-dropdown-menu-submenu-title:last-child > a {
      border-radius: 0 0 4px 4px;
    }
    .ant-dropdown-menu-item:only-child,
    .ant-dropdown-menu-submenu-title:only-child,
    .ant-dropdown-menu-item:only-child > a,
    .ant-dropdown-menu-submenu-title:only-child > a {
      border-radius: 4px;
    }
    .ant-dropdown-menu-item-divider,
    .ant-dropdown-menu-submenu-title-divider {
      background-color: #e8e8e8;
    }
    .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow:after,
    .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-dropdown-menu-submenu-title:first-child,
    .ant-dropdown-menu-submenu-title:last-child {
      border-radius: 0;
    }
    .ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,
    .ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-dropdown-menu-submenu:first-child .ant-dropdown-menu-submenu-title {
      border-radius: 4px 4px 0 0;
    }
    .ant-dropdown-menu-submenu:last-child .ant-dropdown-menu-submenu-title {
      border-radius: 0 0 4px 4px;
    }
    .ant-dropdown-menu-dark,
    .ant-dropdown-menu-dark .ant-dropdown-menu {
      background: #001529;
    }
    .ant-dropdown-menu-dark .ant-dropdown-menu-item,
    .ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title,
    .ant-dropdown-menu-dark .ant-dropdown-menu-item > a {
      color: rgba(255, 255, 255, 0.65);
    }
    .ant-dropdown-menu-dark .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow:after,
    .ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after,
    .ant-dropdown-menu-dark .ant-dropdown-menu-item > a .ant-dropdown-menu-submenu-arrow:after {
      color: rgba(255, 255, 255, 0.65);
    }
    .ant-dropdown-menu-dark .ant-dropdown-menu-item:hover,
    .ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title:hover,
    .ant-dropdown-menu-dark .ant-dropdown-menu-item > a:hover {
      color: #fff;
      background: transparent;
    }
    .ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,
    .ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,
    .ant-dropdown-menu-dark .ant-dropdown-menu-item-selected > a {
      background: ${primaryColor};
      color: #fff;
    }
    .ant-form {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-form legend {
      color: rgba(0, 0, 0, 0.45);
      border: 0;
      border-bottom: 1px solid #d9d9d9;
    }
    .ant-form output {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-form-item-required:before {
      color: #f5222d;
    }
    .ant-form-item {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-form-item-label label {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-form-explain,
    .ant-form-extra {
      color: rgba(0, 0, 0, 0.45);
    }
    form .ant-upload {
      background: transparent;
    }
    .ant-input-group-wrap .ant-select-selection {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-input-group-wrap .ant-select-selection:hover {
      border-color: #d9d9d9;
    }
    .ant-input-group-wrap .ant-select-selection--single {
      background-color: #eee;
    }
    .ant-input-group-wrap .ant-select-open .ant-select-selection {
      border-color: #d9d9d9;
      box-shadow: none;
    }
    .has-success.has-feedback:after {
      color: #52c41a;
    }
    .has-warning .ant-form-explain,
    .has-warning .ant-form-split {
      color: #faad14;
    }
    .has-warning .ant-input,
    .has-warning .ant-input:hover {
      border-color: #faad14;
    }
    .has-warning .ant-input:focus {
      border-color: #ffc53d;
      box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
    }
    .has-warning .ant-input:not([disabled]):hover {
      border-color: #faad14;
    }
    .has-warning .ant-calendar-picker-open .ant-calendar-picker-input {
      border-color: #ffc53d;
      box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
    }
    .has-warning .ant-input-prefix {
      color: #faad14;
    }
    .has-warning .ant-input-group-addon {
      color: #faad14;
      border-color: #faad14;
      background-color: #fff;
    }
    .has-warning .has-feedback {
      color: #faad14;
    }
    .has-warning.has-feedback:after {
      color: #faad14;
    }
    .has-warning .ant-select-selection {
      border-color: #faad14;
    }
    .has-warning .ant-select-open .ant-select-selection,
    .has-warning .ant-select-focused .ant-select-selection {
      border-color: #ffc53d;
      box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
    }
    .has-warning .ant-calendar-picker-icon:after,
    .has-warning .ant-time-picker-icon:after,
    .has-warning .ant-picker-icon:after,
    .has-warning .ant-select-arrow,
    .has-warning .ant-cascader-picker-arrow {
      color: #faad14;
    }
    .has-warning .ant-input-number,
    .has-warning .ant-time-picker-input {
      border-color: #faad14;
    }
    .has-warning .ant-input-number-focused,
    .has-warning .ant-time-picker-input-focused,
    .has-warning .ant-input-number:focus,
    .has-warning .ant-time-picker-input:focus {
      border-color: #ffc53d;
      box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
    }
    .has-warning .ant-input-number:not([disabled]):hover,
    .has-warning .ant-time-picker-input:not([disabled]):hover {
      border-color: #faad14;
    }
    .has-warning .ant-cascader-picker:focus .ant-cascader-input {
      border-color: #ffc53d;
      box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
    }
    .has-error .ant-form-explain,
    .has-error .ant-form-split {
      color: #f5222d;
    }
    .has-error .ant-input,
    .has-error .ant-input:hover {
      border-color: #f5222d;
    }
    .has-error .ant-input:focus {
      border-color: #ff4d4f;
      box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
    }
    .has-error .ant-input:not([disabled]):hover {
      border-color: #f5222d;
    }
    .has-error .ant-calendar-picker-open .ant-calendar-picker-input {
      border-color: #ff4d4f;
      box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
    }
    .has-error .ant-input-prefix {
      color: #f5222d;
    }
    .has-error .ant-input-group-addon {
      color: #f5222d;
      border-color: #f5222d;
      background-color: #fff;
    }
    .has-error .has-feedback {
      color: #f5222d;
    }
    .has-error.has-feedback:after {
      color: #f5222d;
    }
    .has-error .ant-select-selection {
      border-color: #f5222d;
    }
    .has-error .ant-select-open .ant-select-selection,
    .has-error .ant-select-focused .ant-select-selection {
      border-color: #ff4d4f;
      box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
    }
    .has-error .ant-input-group-addon .ant-select-selection {
      border-color: transparent;
      box-shadow: none;
    }
    .has-error .ant-calendar-picker-icon:after,
    .has-error .ant-time-picker-icon:after,
    .has-error .ant-picker-icon:after,
    .has-error .ant-select-arrow,
    .has-error .ant-cascader-picker-arrow {
      color: #f5222d;
    }
    .has-error .ant-input-number,
    .has-error .ant-time-picker-input {
      border-color: #f5222d;
    }
    .has-error .ant-input-number-focused,
    .has-error .ant-time-picker-input-focused,
    .has-error .ant-input-number:focus,
    .has-error .ant-time-picker-input:focus {
      border-color: #ff4d4f;
      box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
    }
    .has-error .ant-input-number:not([disabled]):hover,
    .has-error .ant-time-picker-input:not([disabled]):hover {
      border-color: #f5222d;
    }
    .has-error .ant-mention-wrapper .ant-mention-editor,
    .has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):hover {
      border-color: #f5222d;
    }
    .has-error .ant-mention-wrapper.ant-mention-active:not([disabled]) .ant-mention-editor,
    .has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):focus {
      border-color: #ff4d4f;
      box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
    }
    .has-error .ant-cascader-picker:focus .ant-cascader-input {
      border-color: #ff4d4f;
      box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
    }
    .is-validating.has-feedback:after {
      color: ${primaryColor};
    }
    .ant-input-number {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-input-number::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-input-number:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-input-number::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-input-number:hover {
      border-color: ${hoverColor};
    }
    .ant-input-number:focus {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-input-number-disabled {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-input-number-disabled:hover {
      border-color: #e6d8d8;
    }
    .ant-input-number-handler {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-input-number-handler:active {
      background: #f4f4f4;
    }
    .ant-input-number-handler:hover .ant-input-number-handler-up-inner,
    .ant-input-number-handler:hover .ant-input-number-handler-down-inner {
      color: ${hoverColor};
    }
    .ant-input-number-handler-up-inner,
    .ant-input-number-handler-down-inner {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-input-number:hover {
      border-color: ${hoverColor};
    }
    .ant-input-number-focused {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-input-number-disabled {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-input-number-disabled:hover {
      border-color: #e6d8d8;
    }
    .ant-input-number-disabled .ant-input-number-input {
      background-color: #f5f5f5;
    }
    .ant-input-number-input {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      border: 0;
      border-radius: 4px;
    }
    .ant-input-number-input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-input-number-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-input-number-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-input-number-input[disabled] {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-input-number-input[disabled]:hover {
      border-color: #e6d8d8;
    }
    .ant-input-number-handler-wrap {
      border-left: 1px solid #d9d9d9;
      background: #fff;
      border-radius: 0 4px 4px 0;
    }
    .ant-input-number-handler-down {
      border-top: 1px solid #d9d9d9;
    }
    .ant-input-number-handler-up-disabled:hover .ant-input-number-handler-up-inner,
    .ant-input-number-handler-down-disabled:hover .ant-input-number-handler-down-inner {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-input {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-input:hover {
      border-color: ${hoverColor};
    }
    .ant-input:focus {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-input-disabled {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-input-disabled:hover {
      border-color: #e6d8d8;
    }
    .ant-input-group {
      color: rgba(0, 0, 0, 0.65);
      border-collapse: separate;
      border-spacing: 0;
    }
    .ant-input-group-addon:not(:first-child):not(:last-child),
    .ant-input-group-wrap:not(:first-child):not(:last-child),
    .ant-input-group > .ant-input:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    .ant-input-group-addon {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fafafa;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-input-group-addon .ant-select .ant-select-selection {
      background-color: inherit;
      border: 1px solid transparent;
      box-shadow: none;
    }
    .ant-input-group-addon .ant-select-open .ant-select-selection,
    .ant-input-group-addon .ant-select-focused .ant-select-selection {
      color: ${primaryColor};
    }
    .ant-input-group > .ant-input:first-child,
    .ant-input-group-addon:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-input-group > .ant-input:first-child .ant-select .ant-select-selection,
    .ant-input-group-addon:first-child .ant-select .ant-select-selection {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-input-group > .ant-input-affix-wrapper:not(:first-child) .ant-input {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-input-group > .ant-input-affix-wrapper:not(:last-child) .ant-input {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-input-group-addon:first-child {
      border-right: 0;
    }
    .ant-input-group-addon:last-child {
      border-left: 0;
    }
    .ant-input-group > .ant-input:last-child,
    .ant-input-group-addon:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-input-group > .ant-input:last-child .ant-select .ant-select-selection,
    .ant-input-group-addon:last-child .ant-select .ant-select-selection {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-input-group.ant-input-group-compact > * {
      border-radius: 0;
      border-right-width: 0;
    }
    .ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selection,
    .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor,
    .ant-input-group.ant-input-group-compact > .ant-time-picker .ant-time-picker-input {
      border-radius: 0;
      border-right-width: 0;
    }
    .ant-input-group.ant-input-group-compact > *:first-child,
    .ant-input-group.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,
    .ant-input-group.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:first-child .ant-mention-editor,
    .ant-input-group.ant-input-group-compact > .ant-time-picker:first-child .ant-time-picker-input {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .ant-input-group.ant-input-group-compact > *:last-child,
    .ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,
    .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,
    .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor,
    .ant-input-group.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-right-width: 1px;
    }
    .ant-input-affix-wrapper {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
      border-color: ${hoverColor};
    }
    .ant-input-affix-wrapper .ant-input-prefix,
    .ant-input-affix-wrapper .ant-input-suffix {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-input-search-icon {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-input-search > .ant-input-suffix > .ant-input-search-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .ant-layout {
      background: #f0f2f5;
    }
    .ant-layout-header {
      background: #001529;
    }
    .ant-layout-footer {
      background: #f0f2f5;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-layout-sider {
      background: #001529;
    }
    .ant-layout-sider-trigger {
      color: #fff;
      background: #002140;
    }
    .ant-layout-sider-zero-width-trigger {
      background: #001529;
      color: #fff;
      border-radius: 0 4px 4px 0;
    }
    .ant-layout-sider-zero-width-trigger:hover {
      background: #192c3e;
    }
    .ant-list {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-list-empty-text {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-list-item-meta-title {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-list-item-meta-title > a {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-list-item-meta-title > a:hover {
      color: ${primaryColor};
    }
    .ant-list-item-meta-description {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-list-item-action > li {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-list-item-action-split {
      background-color: #e8e8e8;
    }
    .ant-list-empty {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-list-split .ant-list-item {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-list-split .ant-list-item:last-child {
      border-bottom: none;
    }
    .ant-list-split .ant-list-header {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-list-something-after-last-item .ant-list-item:last-child {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-list-vertical .ant-list-item-meta-title {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-list-vertical .ant-list-item-content {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-list-grid .ant-list-item {
      border-bottom: none;
    }
    .ant-list-bordered {
      border-radius: 4px;
      border: 1px solid #d9d9d9;
    }
    .ant-list-bordered .ant-list-item {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-mention-wrapper {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-mention-wrapper .ant-mention-editor {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-mention-wrapper .ant-mention-editor::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-mention-wrapper .ant-mention-editor:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-mention-wrapper .ant-mention-editor::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-mention-wrapper .ant-mention-editor:hover {
      border-color: ${hoverColor};
    }
    .ant-mention-wrapper .ant-mention-editor:focus {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-mention-wrapper .ant-mention-editor-disabled {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-mention-wrapper .ant-mention-editor-disabled:hover {
      border-color: #e6d8d8;
    }
    .ant-mention-wrapper.ant-mention-active:not(.disabled) .ant-mention-editor {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-mention-wrapper.disabled .ant-mention-editor {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-mention-wrapper.disabled .ant-mention-editor:hover {
      border-color: #e6d8d8;
    }
    .ant-mention-wrapper .public-DraftEditorPlaceholder-root .public-DraftEditorPlaceholder-inner {
      color: #bfbfbf;
    }
    .ant-mention-dropdown {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
    }
    .ant-mention-dropdown-notfound.ant-mention-dropdown-item {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-mention-dropdown-notfound.ant-mention-dropdown-item .anticon-loading {
      color: ${primaryColor};
    }
    .ant-mention-dropdown-item {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-mention-dropdown-item:hover {
      background-color: #f9f0ff;
    }
    .ant-mention-dropdown-item.focus,
    .ant-mention-dropdown-item-active {
      background-color: #f9f0ff;
    }
    .ant-mention-dropdown-item-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-mention-dropdown-item-disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #fff;
    }
    .ant-mention-dropdown-item-selected,
    .ant-mention-dropdown-item-selected:hover {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-mention-dropdown-item-divider {
      background-color: #e8e8e8;
    }
    .ant-menu {
      color: rgba(0, 0, 0, 0.65);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      background: #fff;
    }
    .ant-menu-item-group-title {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-menu-item:active,
    .ant-menu-submenu-title:active {
      background: #f9f0ff;
    }
    .ant-menu-item > a {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-menu-item > a:hover {
      color: ${primaryColor};
    }
    .ant-menu-item > a:before {
      background-color: transparent;
    }
    .ant-menu-item-divider {
      background-color: #e8e8e8;
    }
    .ant-menu-item:hover,
    .ant-menu-item-active,
    .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
    .ant-menu-submenu-active,
    .ant-menu-submenu-title:hover {
      color: ${primaryColor};
    }
    .ant-menu-horizontal > .ant-menu-item:hover,
    .ant-menu-horizontal > .ant-menu-item-active,
    .ant-menu-horizontal > .ant-menu-submenu .ant-menu-submenu-title:hover {
      background-color: transparent;
    }
    .ant-menu-item-selected {
      color: ${primaryColor};
    }
    .ant-menu-item-selected > a,
    .ant-menu-item-selected > a:hover {
      color: ${primaryColor};
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: #f9f0ff;
    }
    .ant-menu-inline,
    .ant-menu-vertical,
    .ant-menu-vertical-left {
      border-right: 1px solid #e8e8e8;
    }
    .ant-menu-vertical-right {
      border-left: 1px solid #e8e8e8;
    }
    .ant-menu-vertical.ant-menu-sub,
    .ant-menu-vertical-left.ant-menu-sub,
    .ant-menu-vertical-right.ant-menu-sub {
      border-right: 0;
    }
    .ant-menu-vertical.ant-menu-sub .ant-menu-item,
    .ant-menu-vertical-left.ant-menu-sub .ant-menu-item,
    .ant-menu-vertical-right.ant-menu-sub .ant-menu-item {
      border-right: 0;
    }
    .ant-menu-vertical.ant-menu-sub .ant-menu-item:after,
    .ant-menu-vertical-left.ant-menu-sub .ant-menu-item:after,
    .ant-menu-vertical-right.ant-menu-sub .ant-menu-item:after {
      border-right: 0;
    }
    .ant-menu > .ant-menu-item-divider {
      background-color: #e8e8e8;
    }
    .ant-menu-submenu-popup {
      border-radius: 4px;
    }
    .ant-menu-submenu > .ant-menu {
      background-color: #fff;
      border-radius: 4px;
    }
    .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
    .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
    .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
      background: #fff;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
      border-radius: 2px;
    }
    .ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
    .ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
    .ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
    .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
    .ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before {
      background: linear-gradient(to right, ${primaryColor}, ${primaryColor});
    }
    .ant-menu-vertical .ant-menu-submenu-selected,
    .ant-menu-vertical-left .ant-menu-submenu-selected,
    .ant-menu-vertical-right .ant-menu-submenu-selected {
      color: ${primaryColor};
    }
    .ant-menu-vertical .ant-menu-submenu-selected > a,
    .ant-menu-vertical-left .ant-menu-submenu-selected > a,
    .ant-menu-vertical-right .ant-menu-submenu-selected > a {
      color: ${primaryColor};
    }
    .ant-menu-horizontal {
      border: 0;
      border-bottom: 1px solid #e8e8e8;
      box-shadow: none;
    }
    .ant-menu-horizontal > .ant-menu-item,
    .ant-menu-horizontal > .ant-menu-submenu {
      border-bottom: 2px solid transparent;
    }
    .ant-menu-horizontal > .ant-menu-item:hover,
    .ant-menu-horizontal > .ant-menu-submenu:hover,
    .ant-menu-horizontal > .ant-menu-item-active,
    .ant-menu-horizontal > .ant-menu-submenu-active,
    .ant-menu-horizontal > .ant-menu-item-open,
    .ant-menu-horizontal > .ant-menu-submenu-open,
    .ant-menu-horizontal > .ant-menu-item-selected,
    .ant-menu-horizontal > .ant-menu-submenu-selected {
      border-bottom: 2px solid ${primaryColor};
      color: ${primaryColor};
    }
    .ant-menu-horizontal > .ant-menu-item > a,
    .ant-menu-horizontal > .ant-menu-submenu > a {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-menu-horizontal > .ant-menu-item > a:hover,
    .ant-menu-horizontal > .ant-menu-submenu > a:hover {
      color: ${primaryColor};
    }
    .ant-menu-vertical .ant-menu-item:after,
    .ant-menu-vertical-left .ant-menu-item:after,
    .ant-menu-vertical-right .ant-menu-item:after,
    .ant-menu-inline .ant-menu-item:after {
      border-right: 3px solid ${primaryColor};
    }
    .ant-menu-inline-collapsed-tooltip a {
      color: rgba(255, 255, 255, 0.85);
    }
    .ant-menu-root.ant-menu-vertical,
    .ant-menu-root.ant-menu-vertical-left,
    .ant-menu-root.ant-menu-vertical-right,
    .ant-menu-root.ant-menu-inline {
      box-shadow: none;
    }
    .ant-menu-sub.ant-menu-inline {
      border: 0;
      box-shadow: none;
      border-radius: 0;
    }
    .ant-menu-item-disabled,
    .ant-menu-submenu-disabled {
      color: rgba(0, 0, 0, 0.25) !important;
      background: none;
      border-color: transparent !important;
    }
    .ant-menu-item-disabled > a,
    .ant-menu-submenu-disabled > a {
      color: rgba(0, 0, 0, 0.25) !important;
    }
    .ant-menu-item-disabled > .ant-menu-submenu-title,
    .ant-menu-submenu-disabled > .ant-menu-submenu-title {
      color: rgba(0, 0, 0, 0.25) !important;
    }
    .ant-menu-dark,
    .ant-menu-dark .ant-menu-sub {
      color: rgba(255, 255, 255, 0.65);
      background: #001529;
    }
    .ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
      background: #fff;
    }
    .ant-menu-dark.ant-menu-submenu-popup {
      background: transparent;
    }
    .ant-menu-dark .ant-menu-inline.ant-menu-sub {
      background: #000c17;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
    }
    .ant-menu-dark.ant-menu-horizontal {
      border-bottom-color: #001529;
    }
    .ant-menu-dark.ant-menu-horizontal > .ant-menu-item,
    .ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
      border-color: #001529;
      border-bottom: 0;
    }
    .ant-menu-dark .ant-menu-item,
    .ant-menu-dark .ant-menu-item-group-title,
    .ant-menu-dark .ant-menu-item > a {
      color: rgba(255, 255, 255, 0.65);
    }
    .ant-menu-dark.ant-menu-inline,
    .ant-menu-dark.ant-menu-vertical,
    .ant-menu-dark.ant-menu-vertical-left,
    .ant-menu-dark.ant-menu-vertical-right {
      border-right: 0;
    }
    .ant-menu-dark.ant-menu-inline .ant-menu-item,
    .ant-menu-dark.ant-menu-vertical .ant-menu-item,
    .ant-menu-dark.ant-menu-vertical-left .ant-menu-item,
    .ant-menu-dark.ant-menu-vertical-right .ant-menu-item {
      border-right: 0;
    }
    .ant-menu-dark.ant-menu-inline .ant-menu-item:after,
    .ant-menu-dark.ant-menu-vertical .ant-menu-item:after,
    .ant-menu-dark.ant-menu-vertical-left .ant-menu-item:after,
    .ant-menu-dark.ant-menu-vertical-right .ant-menu-item:after {
      border-right: 0;
    }
    .ant-menu-dark .ant-menu-item:hover,
    .ant-menu-dark .ant-menu-item-active,
    .ant-menu-dark .ant-menu-submenu-active,
    .ant-menu-dark .ant-menu-submenu-open,
    .ant-menu-dark .ant-menu-submenu-selected,
    .ant-menu-dark .ant-menu-submenu-title:hover {
      background-color: transparent;
      color: #fff;
    }
    .ant-menu-dark .ant-menu-item:hover > a,
    .ant-menu-dark .ant-menu-item-active > a,
    .ant-menu-dark .ant-menu-submenu-active > a,
    .ant-menu-dark .ant-menu-submenu-open > a,
    .ant-menu-dark .ant-menu-submenu-selected > a,
    .ant-menu-dark .ant-menu-submenu-title:hover > a {
      color: #fff;
    }
    .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
    .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
    .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before {
      background: #fff;
    }
    .ant-menu-dark .ant-menu-item-selected {
      border-right: 0;
      color: #fff;
    }
    .ant-menu-dark .ant-menu-item-selected:after {
      border-right: 0;
    }
    .ant-menu-dark .ant-menu-item-selected > a,
    .ant-menu-dark .ant-menu-item-selected > a:hover {
      color: #fff;
    }
    .ant-menu.ant-menu-dark .ant-menu-item-selected,
    .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
      background-color: ${primaryColor};
    }
    .ant-menu-dark .ant-menu-item-disabled,
    .ant-menu-dark .ant-menu-submenu-disabled,
    .ant-menu-dark .ant-menu-item-disabled > a,
    .ant-menu-dark .ant-menu-submenu-disabled > a {
      color: rgba(255, 255, 255, 0.35) !important;
    }
    .ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title,
    .ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title {
      color: rgba(255, 255, 255, 0.35) !important;
    }
    .ant-message {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-message-notice-content {
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      background: #fff;
    }
    .ant-message-success .anticon {
      color: #52c41a;
    }
    .ant-message-error .anticon {
      color: #f5222d;
    }
    .ant-message-warning .anticon {
      color: #faad14;
    }
    .ant-message-info .anticon,
    .ant-message-loading .anticon {
      color: ${primaryColor};
    }
    .ant-modal {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-modal-title {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-modal-content {
      background-color: #fff;
      border: 0;
      border-radius: 4px;
      background-clip: padding-box;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .ant-modal-close {
      border: 0;
      background: transparent;
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-modal-close:focus,
    .ant-modal-close:hover {
      color: #444;
    }
    .ant-modal-header {
      border-radius: 4px 4px 0 0;
      background: #fff;
      color: rgba(0, 0, 0, 0.65);
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-modal-footer {
      border-top: 1px solid #e8e8e8;
      border-radius: 0 0 4px 4px;
    }
    .ant-modal-mask {
      background-color: #373737;
      background-color: rgba(0, 0, 0, 0.65);
    }
    .ant-confirm-body .ant-confirm-title {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-confirm-body .ant-confirm-content {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-confirm-error .ant-confirm-body > .anticon {
      color: #f5222d;
    }
    .ant-confirm-warning .ant-confirm-body > .anticon,
    .ant-confirm-confirm .ant-confirm-body > .anticon {
      color: #faad14;
    }
    .ant-confirm-info .ant-confirm-body > .anticon {
      color: ${primaryColor};
    }
    .ant-confirm-success .ant-confirm-body > .anticon {
      color: #52c41a;
    }
    .ant-notification {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-notification-notice {
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      background: #fff;
    }
    .ant-notification-notice-message {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-notification-notice-message-single-line-auto-margin {
      background-color: transparent;
    }
    .ant-notification-notice-icon-success {
      color: #52c41a;
    }
    .ant-notification-notice-icon-info {
      color: ${primaryColor};
    }
    .ant-notification-notice-icon-warning {
      color: #faad14;
    }
    .ant-notification-notice-icon-error {
      color: #f5222d;
    }
    .ant-notification-notice-close {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-notification-notice-close:hover {
      color: #404040;
    }
    .ant-pagination {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-pagination-item {
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      background-color: #fff;
    }
    .ant-pagination-item a {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-pagination-item:focus,
    .ant-pagination-item:hover {
      border-color: ${primaryColor};
    }
    .ant-pagination-item:focus a,
    .ant-pagination-item:hover a {
      color: ${primaryColor};
    }
    .ant-pagination-item-active {
      border-color: ${primaryColor};
    }
    .ant-pagination-item-active a {
      color: ${primaryColor};
    }
    .ant-pagination-item-active:focus,
    .ant-pagination-item-active:hover {
      border-color: ${hoverColor};
    }
    .ant-pagination-item-active:focus a,
    .ant-pagination-item-active:hover a {
      color: ${hoverColor};
    }
    .ant-pagination-jump-prev:after,
    .ant-pagination-jump-next:after {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-pagination-jump-prev:focus:after,
    .ant-pagination-jump-next:focus:after,
    .ant-pagination-jump-prev:hover:after,
    .ant-pagination-jump-next:hover:after {
      color: ${primaryColor};
    }
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      color: rgba(0, 0, 0, 0.65);
      border-radius: 4px;
    }
    .ant-pagination-prev a,
    .ant-pagination-next a {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-pagination-prev:hover a,
    .ant-pagination-next:hover a {
      border-color: ${hoverColor};
    }
    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
      border: 1px solid #d9d9d9;
      background-color: #fff;
      border-radius: 4px;
    }
    .ant-pagination-prev:focus .ant-pagination-item-link,
    .ant-pagination-next:focus .ant-pagination-item-link,
    .ant-pagination-prev:hover .ant-pagination-item-link,
    .ant-pagination-next:hover .ant-pagination-item-link {
      border-color: ${primaryColor};
      color: ${primaryColor};
    }
    .ant-pagination-disabled a,
    .ant-pagination-disabled:hover a,
    .ant-pagination-disabled:focus a,
    .ant-pagination-disabled .ant-pagination-item-link,
    .ant-pagination-disabled:hover .ant-pagination-item-link,
    .ant-pagination-disabled:focus .ant-pagination-item-link {
      border-color: #d9d9d9;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-pagination-options-quick-jumper input {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-pagination-options-quick-jumper input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-pagination-options-quick-jumper input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-pagination-options-quick-jumper input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-pagination-options-quick-jumper input:hover {
      border-color: ${hoverColor};
    }
    .ant-pagination-options-quick-jumper input:focus {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-pagination-options-quick-jumper input-disabled {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-pagination-options-quick-jumper input-disabled:hover {
      border-color: #e6d8d8;
    }
    .ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-simple .ant-pagination-next .ant-pagination-item-link {
      border: 0;
    }
    .ant-pagination-simple .ant-pagination-simple-pager input {
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
    }
    .ant-pagination-simple .ant-pagination-simple-pager input:hover {
      border-color: ${primaryColor};
    }
    .ant-pagination.mini .ant-pagination-item:not(.ant-pagination-item-active) {
      background: transparent;
      border-color: transparent;
    }
    .ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination.mini .ant-pagination-next .ant-pagination-item-link {
      border-color: transparent;
      background: transparent;
    }
    .ant-popover {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-popover:after {
      background: rgba(255, 255, 255, 0.01);
    }
    .ant-popover-inner {
      background-color: #fff;
      background-clip: padding-box;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .ant-popover-title {
      border-bottom: 1px solid #e8e8e8;
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-popover-inner-content {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-popover-message {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-popover-message > .anticon {
      color: #faad14;
    }
    .ant-popover-arrow {
      background: #fff;
      border-color: transparent;
      border-style: solid;
    }
    .ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-topLeft > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-topRight > .ant-popover-content > .ant-popover-arrow {
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    }
    .ant-popover-placement-right > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-rightTop > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-rightBottom > .ant-popover-content > .ant-popover-arrow {
      box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    }
    .ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-bottomLeft > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow {
      box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.06);
    }
    .ant-popover-placement-left > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-leftTop > .ant-popover-content > .ant-popover-arrow,
    .ant-popover-placement-leftBottom > .ant-popover-content > .ant-popover-arrow {
      box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    }
    .ant-progress {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-progress-inner {
      background-color: #f5f5f5;
      border-radius: 100px;
    }
    .ant-progress-bg {
      border-radius: 100px;
      background-color: ${primaryColor};
    }
    .ant-progress-text {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-progress-status-active .ant-progress-bg:before {
      background: #fff;
      border-radius: 10px;
    }
    .ant-progress-status-exception .ant-progress-bg {
      background-color: #f5222d;
    }
    .ant-progress-status-exception .ant-progress-text {
      color: #f5222d;
    }
    .ant-progress-status-success .ant-progress-bg {
      background-color: #52c41a;
    }
    .ant-progress-status-success .ant-progress-text {
      color: #52c41a;
    }
    .ant-progress-circle .ant-progress-inner {
      background-color: transparent;
    }
    .ant-progress-circle .ant-progress-text {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-progress-circle.ant-progress-status-exception .ant-progress-text {
      color: #f5222d;
    }
    .ant-progress-circle.ant-progress-status-success .ant-progress-text {
      color: #52c41a;
    }
    .ant-radio-group {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-radio-wrapper {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-radio {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-radio-wrapper:hover .ant-radio .ant-radio-inner,
    .ant-radio:hover .ant-radio-inner,
    .ant-radio-focused .ant-radio-inner {
      border-color: ${primaryColor};
    }
    .ant-radio-checked:after {
      border-radius: 50%;
      border: 1px solid ${primaryColor};
    }
    .ant-radio-inner {
      border-width: 1px;
      border-style: solid;
      border-radius: 100px;
      border-color: #d9d9d9;
      background-color: #fff;
    }
    .ant-radio-inner:after {
      border-radius: 4px;
      border-top: 0;
      border-left: 0;
      background-color: ${primaryColor};
    }
    .ant-radio-checked .ant-radio-inner {
      border-color: ${primaryColor};
    }
    .ant-radio-disabled .ant-radio-inner {
      border-color: #d9d9d9 !important;
      background-color: #f5f5f5;
    }
    .ant-radio-disabled .ant-radio-inner:after {
      background-color: #ccc;
    }
    .ant-radio-disabled + span {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-radio-button-wrapper {
      color: rgba(0, 0, 0, 0.65);
      border: 1px solid #d9d9d9;
      border-left: 0;
      border-top-width: 1.02px;
      background: #fff;
    }
    .ant-radio-button-wrapper a {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-radio-button-wrapper:not(:first-child)::before {
      background-color: #d9d9d9;
    }
    .ant-radio-button-wrapper:first-child {
      border-radius: 4px 0 0 4px;
      border-left: 1px solid #d9d9d9;
    }
    .ant-radio-button-wrapper:last-child {
      border-radius: 0 4px 4px 0;
    }
    .ant-radio-button-wrapper:first-child:last-child {
      border-radius: 4px;
    }
    .ant-radio-button-wrapper:hover,
    .ant-radio-button-wrapper-focused {
      color: ${primaryColor};
    }
    .ant-radio-button-wrapper-checked {
      background: #fff;
      border-color: ${primaryColor};
      color: ${primaryColor};
      box-shadow: -1px 0 0 0 ${primaryColor};
    }
    .ant-radio-button-wrapper-checked::before {
      background-color: ${primaryColor} !important;
    }
    .ant-radio-button-wrapper-checked:first-child {
      border-color: ${primaryColor};
      box-shadow: none !important;
    }
    .ant-radio-button-wrapper-checked:hover {
      border-color: ${hoverColor};
      box-shadow: -1px 0 0 0 ${hoverColor};
      color: ${hoverColor};
    }
    .ant-radio-button-wrapper-checked:active {
      border-color: ${activeColor};
      box-shadow: -1px 0 0 0 ${activeColor};
      color: ${activeColor};
    }
    .ant-radio-button-wrapper-disabled {
      border-color: #d9d9d9;
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-radio-button-wrapper-disabled:first-child,
    .ant-radio-button-wrapper-disabled:hover {
      border-color: #d9d9d9;
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-radio-button-wrapper-disabled:first-child {
      border-left-color: #d9d9d9;
    }
    .ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked {
      color: #fff;
      background-color: #e6e6e6;
      border-color: #d9d9d9;
      box-shadow: none;
    }
    .ant-rate {
      color: rgba(0, 0, 0, 0.65);
      color: #fadb14;
    }
    .ant-rate-star {
      color: inherit;
    }
    .ant-rate-star-first,
    .ant-rate-star-second {
      color: #e8e8e8;
    }
    .ant-rate-star-half .ant-rate-star-first,
    .ant-rate-star-full .ant-rate-star-second {
      color: inherit;
    }
    .ant-select {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select > ul > li > a {
      background-color: #fff;
    }
    .ant-select-arrow {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-selection {
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      border-top-width: 1.02px;
    }
    .ant-select-selection:hover {
      border-color: ${hoverColor};
    }
    .ant-select-focused .ant-select-selection,
    .ant-select-selection:focus,
    .ant-select-selection:active {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-select-selection__clear {
      background: #fff;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-selection__clear:hover {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-select-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-disabled .ant-select-selection {
      background: #f5f5f5;
    }
    .ant-select-disabled .ant-select-selection:hover,
    .ant-select-disabled .ant-select-selection:focus,
    .ant-select-disabled .ant-select-selection:active {
      border-color: #d9d9d9;
      box-shadow: none;
    }
    .ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice {
      background: #f5f5f5;
      color: #aaa;
    }
    .ant-select-disabled .ant-select-selection__choice__remove {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-disabled .ant-select-selection__choice__remove:hover {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-selection__placeholder,
    .ant-select-search__field__placeholder {
      color: #bfbfbf;
    }
    .ant-select-search--inline .ant-select-search__field {
      border-width: 0;
      background: transparent;
      border-radius: 4px;
    }
    .ant-select-selection--multiple .ant-select-selection__choice {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fafafa;
      border: 1px solid #e8e8e8;
      border-radius: 2px;
    }
    .ant-select-selection--multiple .ant-select-selection__choice__remove {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-select-selection--multiple .ant-select-selection__choice__remove:hover {
      color: #404040;
    }
    .ant-select-open .ant-select-selection {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-select-combobox .ant-select-search__field {
      box-shadow: none;
    }
    .ant-select-dropdown {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
    }
    .ant-select-dropdown-menu-item-group-title {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-select-dropdown-menu-item {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-dropdown-menu-item:hover {
      background-color: #f9f0ff;
    }
    .ant-select-dropdown-menu-item-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-dropdown-menu-item-disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #fff;
    }
    .ant-select-dropdown-menu-item-selected,
    .ant-select-dropdown-menu-item-selected:hover {
      background-color: #fafafa;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-dropdown-menu-item-active {
      background-color: #f9f0ff;
    }
    .ant-select-dropdown-menu-item-divider {
      background-color: #e8e8e8;
    }
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {
      color: transparent;
    }
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover:after {
      color: #ddd;
    }
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:after,
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover:after {
      color: ${primaryColor};
    }
    .ant-slider {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-slider-rail {
      border-radius: 2px;
      background-color: #f5f5f5;
    }
    .ant-slider-track {
      border-radius: 4px;
      background-color: #91d5ff;
    }
    .ant-slider-handle {
      border-radius: 50%;
      border: solid 2px #91d5ff;
      background-color: #fff;
    }
    .ant-slider-handle:focus {
      border-color: #8e58da;
      box-shadow: 0 0 0 5px #b997e8;
    }
    .ant-slider-handle.ant-tooltip-open {
      border-color: ${primaryColor};
    }
    .ant-slider:hover .ant-slider-rail {
      background-color: #e1e1e1;
    }
    .ant-slider:hover .ant-slider-track {
      background-color: #69c0ff;
    }
    .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
      border-color: #69c0ff;
    }
    .ant-slider-mark-text {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-slider-mark-text-active {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-slider-step {
      background: transparent;
    }
    .ant-slider-dot {
      border: 2px solid #e8e8e8;
      background-color: #fff;
      border-radius: 50%;
    }
    .ant-slider-dot-active {
      border-color: #b997e8;
    }
    .ant-slider-disabled .ant-slider-track {
      background-color: rgba(0, 0, 0, 0.25) !important;
    }
    .ant-slider-disabled .ant-slider-handle,
    .ant-slider-disabled .ant-slider-dot {
      border-color: rgba(0, 0, 0, 0.25) !important;
      background-color: #fff;
      box-shadow: none;
    }
    .ant-spin {
      color: rgba(0, 0, 0, 0.65);
      color: ${primaryColor};
    }
    .ant-spin-blur:after {
      background: #fff;
    }
    .ant-spin-tip {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-spin-dot i {
      border-radius: 100%;
      background-color: ${primaryColor};
    }
    .ant-steps {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-steps-item-icon {
      border: 1px solid rgba(0, 0, 0, 0.25);
      border-radius: 32px;
    }
    .ant-steps-item-icon > .ant-steps-icon {
      color: ${primaryColor};
    }
    .ant-steps-item-tail:after {
      background: #e8e8e8;
      border-radius: 1px;
    }
    .ant-steps-item-title {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-steps-item-title:after {
      background: #e8e8e8;
    }
    .ant-steps-item-description {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-steps-item-wait .ant-steps-item-icon {
      border-color: rgba(0, 0, 0, 0.25);
      background-color: #fff;
    }
    .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
      background: rgba(0, 0, 0, 0.25);
    }
    .ant-steps-item-wait > .ant-steps-item-content > .ant-steps-item-title {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-steps-item-wait > .ant-steps-item-content > .ant-steps-item-title:after {
      background-color: #e8e8e8;
    }
    .ant-steps-item-wait > .ant-steps-item-content > .ant-steps-item-description {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-steps-item-wait > .ant-steps-item-tail:after {
      background-color: #e8e8e8;
    }
    .ant-steps-item-process .ant-steps-item-icon {
      border-color: ${primaryColor};
      background-color: #fff;
    }
    .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
      color: ${primaryColor};
    }
    .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
      background: ${primaryColor};
    }
    .ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-title {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-title:after {
      background-color: #e8e8e8;
    }
    .ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-description {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-steps-item-process > .ant-steps-item-tail:after {
      background-color: #e8e8e8;
    }
    .ant-steps-item-process .ant-steps-item-icon {
      background: ${primaryColor};
    }
    .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
      color: #fff;
    }
    .ant-steps-item-finish .ant-steps-item-icon {
      border-color: ${primaryColor};
      background-color: #fff;
    }
    .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
      color: ${primaryColor};
    }
    .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
      background: ${primaryColor};
    }
    .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title:after {
      background-color: ${primaryColor};
    }
    .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-description {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-steps-item-finish > .ant-steps-item-tail:after {
      background-color: ${primaryColor};
    }
    .ant-steps-item-error .ant-steps-item-icon {
      border-color: #f5222d;
      background-color: #fff;
    }
    .ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon {
      color: #f5222d;
    }
    .ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
      background: #f5222d;
    }
    .ant-steps-item-error > .ant-steps-item-content > .ant-steps-item-title {
      color: #f5222d;
    }
    .ant-steps-item-error > .ant-steps-item-content > .ant-steps-item-title:after {
      background-color: #e8e8e8;
    }
    .ant-steps-item-error > .ant-steps-item-content > .ant-steps-item-description {
      color: #f5222d;
    }
    .ant-steps-item-error > .ant-steps-item-tail:after {
      background-color: #e8e8e8;
    }
    .ant-steps-item.ant-steps-next-error .ant-steps-item-title:after {
      background: #f5222d;
    }
    .ant-steps-item-custom .ant-steps-item-icon {
      background: none;
      border: 0;
    }
    .ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
      color: ${primaryColor};
    }
    .ant-steps-small .ant-steps-item-icon {
      border-radius: 24px;
    }
    .ant-steps-small .ant-steps-item-description {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-steps-small .ant-steps-item-custom .ant-steps-item-icon {
      border-radius: 0;
      border: 0;
      background: none;
    }
    .ant-steps-dot .ant-steps-item-icon {
      border: 0;
      background: transparent;
    }
    .ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot {
      border-radius: 100px;
    }
    .ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot:after {
      background: rgba(0, 0, 0, 0.001);
    }
    .ant-switch {
      color: rgba(0, 0, 0, 0.65);
      border-radius: 100px;
      border: 1px solid transparent;
      background-color: rgba(0, 0, 0, 0.25);
    }
    .ant-switch-inner {
      color: #fff;
    }
    .ant-switch:before,
    .ant-switch:after {
      border-radius: 18px;
      background-color: #fff;
    }
    .ant-switch:after {
      box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    }
    .ant-switch:before {
      background: transprent;
    }
    .ant-switch-loading:before {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-switch-checked.ant-switch-loading:before {
      color: ${primaryColor};
    }
    .ant-switch:focus {
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-switch:focus:hover {
      box-shadow: none;
    }
    .ant-switch-checked {
      background-color: ${primaryColor};
    }
    .ant-table {
      color: rgba(0, 0, 0, 0.65);
      border-radius: 4px 4px 0 0;
    }
    .ant-table table {
      border-collapse: separate;
      border-spacing: 0;
      border-radius: 4px 4px 0 0;
    }
    .ant-table-thead > tr > th {
      background: #fafafa;
      color: rgba(0, 0, 0, 0.85);
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-table-thead > tr > th[colspan] {
      border-bottom: 0;
    }
    .ant-table-thead > tr > th .anticon-filter,
    .ant-table-thead > tr > th .ant-table-filter-icon {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-table-thead > tr > th .anticon-filter:hover,
    .ant-table-thead > tr > th .ant-table-filter-icon:hover {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-table-thead > tr > th .ant-table-filter-selected.anticon-filter {
      color: ${primaryColor};
    }
    .ant-table-tbody > tr > td {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-table-thead > tr.ant-table-row-hover > td,
    .ant-table-tbody > tr.ant-table-row-hover > td,
    .ant-table-thead > tr:hover > td,
    .ant-table-tbody > tr:hover > td {
      background: #f9f0ff;
    }
    .ant-table-thead > tr:hover {
      background: none;
    }
    .ant-table-footer {
      background: #fafafa;
      border-radius: 0 0 4px 4px;
      border-top: 1px solid #e8e8e8;
    }
    .ant-table-footer:before {
      background: #fafafa;
    }
    .ant-table.ant-table-bordered .ant-table-footer {
      border: 1px solid #e8e8e8;
    }
    .ant-table-title {
      border-radius: 4px 4px 0 0;
    }
    .ant-table.ant-table-bordered .ant-table-title {
      border: 1px solid #e8e8e8;
    }
    .ant-table-title + .ant-table-content {
      border-radius: 4px 4px 0 0;
    }
    .ant-table-bordered .ant-table-title + .ant-table-content,
    .ant-table-bordered .ant-table-title + .ant-table-content table {
      border-radius: 0;
    }
    .ant-table-without-column-header .ant-table-title + .ant-table-content,
    .ant-table-without-column-header table {
      border-radius: 0;
    }
    .ant-table-tbody > tr.ant-table-row-selected td {
      background: #fafafa;
    }
    .ant-table-thead > tr > th.ant-table-column-sort {
      background: #f5f5f5;
    }
    .ant-table-header {
      background: #fafafa;
    }
    .ant-table-header table {
      border-radius: 4px 4px 0 0;
    }
    .ant-table-loading .ant-table-body {
      background: #fff;
    }
    .ant-table-column-sorter {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-table-column-sorter-up:hover .anticon,
    .ant-table-column-sorter-down:hover .anticon {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-table-column-sorter-up.on .anticon-caret-up,
    .ant-table-column-sorter-down.on .anticon-caret-up,
    .ant-table-column-sorter-up.on .anticon-caret-down,
    .ant-table-column-sorter-down.on .anticon-caret-down {
      color: ${primaryColor};
    }
    .ant-table-bordered .ant-table-header > table,
    .ant-table-bordered .ant-table-body > table,
    .ant-table-bordered .ant-table-fixed-left table,
    .ant-table-bordered .ant-table-fixed-right table {
      border: 1px solid #e8e8e8;
      border-right: 0;
      border-bottom: 0;
    }
    .ant-table-bordered.ant-table-empty .ant-table-placeholder {
      border-left: 1px solid #e8e8e8;
      border-right: 1px solid #e8e8e8;
    }
    .ant-table-bordered.ant-table-fixed-header .ant-table-header > table {
      border-bottom: 0;
    }
    .ant-table-bordered.ant-table-fixed-header .ant-table-body > table {
      border-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-table-bordered.ant-table-fixed-header .ant-table-body-inner > table {
      border-top: 0;
    }
    .ant-table-bordered.ant-table-fixed-header .ant-table-placeholder {
      border: 0;
    }
    .ant-table-bordered .ant-table-thead > tr > th {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-table-bordered .ant-table-thead > tr > th,
    .ant-table-bordered .ant-table-tbody > tr > td {
      border-right: 1px solid #e8e8e8;
    }
    .ant-table-placeholder {
      background: #fff;
      border-bottom: 1px solid #e8e8e8;
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-table-filter-dropdown {
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .ant-table-filter-dropdown .ant-dropdown-menu {
      border: 0;
      box-shadow: none;
      border-radius: 4px 4px 0 0;
    }
    .ant-table-filter-dropdown .ant-dropdown-menu-sub {
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .ant-table-filter-dropdown .ant-dropdown-menu .ant-dropdown-submenu-contain-selected .ant-dropdown-menu-submenu-title:after {
      color: ${primaryColor};
    }
    .ant-table-filter-dropdown > .ant-dropdown-menu > .ant-dropdown-menu-item:last-child,
    .ant-table-filter-dropdown > .ant-dropdown-menu > .ant-dropdown-menu-submenu:last-child .ant-dropdown-menu-submenu-title {
      border-radius: 0;
    }
    .ant-table-filter-dropdown-btns {
      border-top: 1px solid #e8e8e8;
    }
    .ant-table-filter-dropdown-link {
      color: ${primaryColor};
    }
    .ant-table-filter-dropdown-link:hover {
      color: ${hoverColor};
    }
    .ant-table-filter-dropdown-link:active {
      color: ${activeColor};
    }
    .ant-table-selection .anticon-down {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-table-selection-menu {
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .ant-table-selection-menu .ant-action-down {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-table-selection-down:hover .anticon-down {
      color: #666;
    }
    .ant-table-row-expand-icon {
      border: 1px solid #e8e8e8;
      background: #fff;
    }
    tr.ant-table-expanded-row,
    tr.ant-table-expanded-row:hover {
      background: #fbfbfb;
    }
    .ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body {
      background: #fff;
    }
    .ant-table-fixed-left,
    .ant-table-fixed-right {
      border-radius: 0;
    }
    .ant-table-fixed-left table,
    .ant-table-fixed-right table {
      background: #fff;
    }
    .ant-table-fixed-header .ant-table-fixed-left .ant-table-body-outer .ant-table-fixed,
    .ant-table-fixed-header .ant-table-fixed-right .ant-table-body-outer .ant-table-fixed {
      border-radius: 0;
    }
    .ant-table-fixed-left {
      box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.15);
    }
    .ant-table-fixed-left,
    .ant-table-fixed-left table {
      border-radius: 4px 0 0 0;
    }
    .ant-table-fixed-right {
      box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.15);
    }
    .ant-table-fixed-right,
    .ant-table-fixed-right table {
      border-radius: 0 4px 0 0;
    }
    .ant-table-fixed-right .ant-table-expanded-row {
      color: transparent;
    }
    .ant-table.ant-table-scroll-position-left .ant-table-fixed-left {
      box-shadow: none;
    }
    .ant-table.ant-table-scroll-position-right .ant-table-fixed-right {
      box-shadow: none;
    }
    .ant-table-small {
      border: 1px solid #e8e8e8;
      border-radius: 4px;
    }
    .ant-table-small > .ant-table-title {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-table-small > .ant-table-content > .ant-table-header > table,
    .ant-table-small > .ant-table-content > .ant-table-body > table,
    .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table,
    .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table,
    .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table,
    .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table,
    .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table,
    .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table {
      border: 0;
    }
    .ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th,
    .ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th,
    .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th,
    .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th,
    .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th,
    .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th,
    .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,
    .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th {
      background: #fff;
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-table-small > .ant-table-content .ant-table-header {
      background: #fff;
    }
    .ant-table-small > .ant-table-content .ant-table-placeholder,
    .ant-table-small > .ant-table-content .ant-table-row:last-child td {
      border-bottom: 0;
    }
    .ant-table-small.ant-table-bordered {
      border-right: 0;
    }
    .ant-table-small.ant-table-bordered .ant-table-title {
      border: 0;
      border-bottom: 1px solid #e8e8e8;
      border-right: 1px solid #e8e8e8;
    }
    .ant-table-small.ant-table-bordered .ant-table-footer {
      border: 0;
      border-top: 1px solid #e8e8e8;
      border-right: 1px solid #e8e8e8;
    }
    .ant-table-small.ant-table-bordered .ant-table-placeholder {
      border-left: 0;
      border-bottom: 0;
    }
    .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
      border: 1px solid #e8e8e8;
      border-bottom: 0;
      border-radius: 4px 4px 0 0;
      background: #fafafa;
    }
    .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
      background: #fff;
      border-color: #e8e8e8;
      color: ${primaryColor};
    }
    .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab .anticon-close {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab .anticon-close:hover {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-tabs-extra-content .ant-tabs-new-tab {
      border-radius: 2px;
      border: 1px solid #e8e8e8;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tabs-extra-content .ant-tabs-new-tab:hover {
      color: ${primaryColor};
      border-color: ${primaryColor};
    }
    .ant-tabs-vertical.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-tabs-vertical.ant-tabs-card.ant-tabs-left > .ant-tabs-bar .ant-tabs-tab {
      border-right: 0;
      border-radius: 4px 0 0 4px;
    }
    .ant-tabs-vertical.ant-tabs-card.ant-tabs-right > .ant-tabs-bar .ant-tabs-tab {
      border-left: 0;
      border-radius: 0 4px 4px 0;
    }
    .ant-tabs {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tabs-ink-bar {
      background-color: ${primaryColor};
    }
    .ant-tabs-bar {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-tabs-tab-prev,
    .ant-tabs-tab-next {
      border: 0;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-tabs-tab-prev:hover,
    .ant-tabs-tab-next:hover {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tabs-tab-btn-disabled,
    .ant-tabs-tab-btn-disabled:hover {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-tabs-nav .ant-tabs-tab-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-tabs-nav .ant-tabs-tab:hover {
      color: ${hoverColor};
    }
    .ant-tabs-nav .ant-tabs-tab:active {
      color: ${activeColor};
    }
    .ant-tabs-nav .ant-tabs-tab-active {
      color: ${primaryColor};
    }
    .ant-tabs-vertical > .ant-tabs-bar {
      border-bottom: 0;
    }
    .ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar {
      border-right: 1px solid #e8e8e8;
    }
    .ant-tabs-vertical.ant-tabs-left > .ant-tabs-content {
      border-left: 1px solid #e8e8e8;
    }
    .ant-tabs-vertical.ant-tabs-right > .ant-tabs-bar {
      border-left: 1px solid #e8e8e8;
    }
    .ant-tabs-vertical.ant-tabs-right > .ant-tabs-content {
      border-right: 1px solid #e8e8e8;
    }
    .ant-tag {
      color: rgba(0, 0, 0, 0.65);
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      background: #fafafa;
    }
    .ant-tag,
    .ant-tag a,
    .ant-tag a:hover {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tag .anticon-cross {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-tag .anticon-cross:hover {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-tag-has-color {
      border-color: transparent;
    }
    .ant-tag-has-color,
    .ant-tag-has-color a,
    .ant-tag-has-color a:hover,
    .ant-tag-has-color .anticon-cross,
    .ant-tag-has-color .anticon-cross:hover {
      color: #fff;
    }
    .ant-tag-checkable {
      background-color: transparent;
      border-color: transparent;
    }
    .ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
      color: ${primaryColor};
    }
    .ant-tag-checkable:active,
    .ant-tag-checkable-checked {
      color: #fff;
    }
    .ant-tag-checkable-checked {
      background-color: ${primaryColor};
    }
    .ant-tag-checkable:active {
      background-color: ${activeColor};
    }
    .ant-tag-pink {
      color: #eb2f96;
      background: #fff0f6;
      border-color: #ffadd2;
    }
    .ant-tag-pink-inverse {
      background: #eb2f96;
      border-color: #eb2f96;
      color: #fff;
    }
    .ant-tag-magenta {
      color: #eb2f96;
      background: #fff0f6;
      border-color: #ffadd2;
    }
    .ant-tag-magenta-inverse {
      background: #eb2f96;
      border-color: #eb2f96;
      color: #fff;
    }
    .ant-tag-red {
      color: #f5222d;
      background: #fff1f0;
      border-color: #ffa39e;
    }
    .ant-tag-red-inverse {
      background: #f5222d;
      border-color: #f5222d;
      color: #fff;
    }
    .ant-tag-volcano {
      color: #fa541c;
      background: #fff2e8;
      border-color: #ffbb96;
    }
    .ant-tag-volcano-inverse {
      background: #fa541c;
      border-color: #fa541c;
      color: #fff;
    }
    .ant-tag-orange {
      color: #fa8c16;
      background: #fff7e6;
      border-color: #ffd591;
    }
    .ant-tag-orange-inverse {
      background: #fa8c16;
      border-color: #fa8c16;
      color: #fff;
    }
    .ant-tag-yellow {
      color: #fadb14;
      background: #feffe6;
      border-color: #fffb8f;
    }
    .ant-tag-yellow-inverse {
      background: #fadb14;
      border-color: #fadb14;
      color: #fff;
    }
    .ant-tag-gold {
      color: #faad14;
      background: #fffbe6;
      border-color: #ffe58f;
    }
    .ant-tag-gold-inverse {
      background: #faad14;
      border-color: #faad14;
      color: #fff;
    }
    .ant-tag-cyan {
      color: #13c2c2;
      background: #e6fffb;
      border-color: #87e8de;
    }
    .ant-tag-cyan-inverse {
      background: #13c2c2;
      border-color: #13c2c2;
      color: #fff;
    }
    .ant-tag-lime {
      color: #a0d911;
      background: #fcffe6;
      border-color: #eaff8f;
    }
    .ant-tag-lime-inverse {
      background: #a0d911;
      border-color: #a0d911;
      color: #fff;
    }
    .ant-tag-green {
      color: #52c41a;
      background: #f6ffed;
      border-color: #b7eb8f;
    }
    .ant-tag-green-inverse {
      background: #52c41a;
      border-color: #52c41a;
      color: #fff;
    }
    .ant-tag-blue {
      color: ${primaryColor};
      background: #f9f0ff;
      border-color: #91d5ff;
    }
    .ant-tag-blue-inverse {
      background: ${primaryColor};
      border-color: ${primaryColor};
      color: #fff;
    }
    .ant-tag-geekblue {
      color: #2f54eb;
      background: #f0f5ff;
      border-color: #adc6ff;
    }
    .ant-tag-geekblue-inverse {
      background: #2f54eb;
      border-color: #2f54eb;
      color: #fff;
    }
    .ant-tag-purple {
      color: ${primaryColor};
      background: #f9f0ff;
      border-color: #d3adf7;
    }
    .ant-tag-purple-inverse {
      background: ${primaryColor};
      border-color: ${primaryColor};
      color: #fff;
    }
    .ant-time-picker-panel {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-time-picker-panel-inner {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
    }
    .ant-time-picker-panel-input {
      border: 0;
    }
    .ant-time-picker-panel-input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-time-picker-panel-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-time-picker-panel-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-time-picker-panel-input-wrap {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-time-picker-panel-input-invalid {
      border-color: red;
    }
    .ant-time-picker-panel-clear-btn:after {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-time-picker-panel-clear-btn:hover:after {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-time-picker-panel-select {
      border-left: 1px solid #e8e8e8;
    }
    .ant-time-picker-panel-select:first-child {
      border-left: 0;
    }
    .ant-time-picker-panel-select:last-child {
      border-right: 0;
    }
    .ant-time-picker-panel-select li:hover {
      background: #f9f0ff;
    }
    li.ant-time-picker-panel-select-option-selected {
      background: #f5f5f5;
    }
    li.ant-time-picker-panel-select-option-selected:hover {
      background: #f5f5f5;
    }
    li.ant-time-picker-panel-select-option-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    li.ant-time-picker-panel-select-option-disabled:hover {
      background: transparent;
    }
    .ant-time-picker-panel-addon {
      border-top: 1px solid #e8e8e8;
    }
    .ant-time-picker {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-time-picker-input {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-time-picker-input::-moz-placeholder {
      color: #bfbfbf;
    }
    .ant-time-picker-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-time-picker-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-time-picker-input:hover {
      border-color: ${hoverColor};
    }
    .ant-time-picker-input:focus {
      border-color: ${hoverColor};
      box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.2);
    }
    .ant-time-picker-input-disabled {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-time-picker-input-disabled:hover {
      border-color: #e6d8d8;
    }
    .ant-time-picker-input[disabled] {
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-time-picker-input[disabled]:hover {
      border-color: #e6d8d8;
    }
    .ant-time-picker-icon {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-time-picker-icon:after {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-timeline {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-timeline-item-tail {
      border-left: 2px solid #e8e8e8;
    }
    .ant-timeline-item-head {
      background-color: #fff;
      border-radius: 100px;
      border: 2px solid transparent;
    }
    .ant-timeline-item-head-blue {
      border-color: ${primaryColor};
      color: ${primaryColor};
    }
    .ant-timeline-item-head-red {
      border-color: #f5222d;
      color: #f5222d;
    }
    .ant-timeline-item-head-green {
      border-color: #52c41a;
      color: #52c41a;
    }
    .ant-timeline-item-head-custom {
      border: 0;
      border-radius: 0;
    }
    .ant-timeline-item-last .ant-timeline-item-tail {
      border-left: 2px dotted #e8e8e8;
    }
    .ant-tooltip {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tooltip-inner {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.75);
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .ant-tooltip-arrow {
      border-color: transparent;
      border-style: solid;
    }
    .ant-tooltip-placement-top .ant-tooltip-arrow,
    .ant-tooltip-placement-topLeft .ant-tooltip-arrow,
    .ant-tooltip-placement-topRight .ant-tooltip-arrow {
      border-width: 5px 5px 0;
      border-top-color: rgba(0, 0, 0, 0.75);
    }
    .ant-tooltip-placement-right .ant-tooltip-arrow,
    .ant-tooltip-placement-rightTop .ant-tooltip-arrow,
    .ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-right-color: rgba(0, 0, 0, 0.75);
    }
    .ant-tooltip-placement-left .ant-tooltip-arrow,
    .ant-tooltip-placement-leftTop .ant-tooltip-arrow,
    .ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-left-color: rgba(0, 0, 0, 0.75);
    }
    .ant-tooltip-placement-bottom .ant-tooltip-arrow,
    .ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,
    .ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
      border-width: 0 5px 5px;
      border-bottom-color: rgba(0, 0, 0, 0.75);
    }
    .ant-transfer {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-transfer-list {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-transfer-list-search-action {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-transfer-list-search-action .anticon {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-transfer-list-search-action .anticon:hover {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-transfer-list-header {
      border-radius: 4px 4px 0 0;
      background: #fff;
      color: rgba(0, 0, 0, 0.65);
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
      background-color: #f9f0ff;
    }
    .ant-transfer-list-content-item-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-transfer-list-body-not-found {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-transfer-list-footer {
      border-top: 1px solid #e8e8e8;
      border-radius: 0 0 4px 4px;
    }
    .ant-select-tree-checkbox {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-inner,
    .ant-select-tree-checkbox:hover .ant-select-tree-checkbox-inner,
    .ant-select-tree-checkbox-input:focus + .ant-select-tree-checkbox-inner {
      border-color: ${primaryColor};
    }
    .ant-select-tree-checkbox-checked:after {
      border-radius: 2px;
      border: 1px solid ${primaryColor};
    }
    .ant-select-tree-checkbox-inner {
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      background-color: #fff;
    }
    .ant-select-tree-checkbox-inner:after {
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }
    .ant-select-tree-checkbox-indeterminate.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner:after {
      border-color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner:after {
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }
    .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner,
    .ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner {
      background-color: ${primaryColor};
      border-color: ${primaryColor};
    }
    .ant-select-tree-checkbox-disabled.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner:after {
      border-color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner {
      border-color: #d9d9d9 !important;
      background-color: #f5f5f5;
    }
    .ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner:after {
      border-color: #f5f5f5;
    }
    .ant-select-tree-checkbox-disabled + span {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-tree-checkbox-wrapper {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-tree-checkbox-group {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-tree {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-tree li .ant-select-tree-node-content-wrapper {
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-tree li .ant-select-tree-node-content-wrapper:hover {
      background-color: #f9f0ff;
    }
    .ant-select-tree li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
      background-color: #efdbff;
    }
    .ant-select-tree li span.ant-select-tree-switcher,
    .ant-select-tree li span.ant-select-tree-iconEle {
      border: 0 none;
    }
    .ant-select-tree li span.ant-select-tree-icon_loading:after {
      color: ${primaryColor};
    }
    li.ant-select-tree-treenode-disabled > span,
    li.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper,
    li.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper span,
    li.ant-select-tree-treenode-disabled > span.ant-select-tree-switcher {
      color: rgba(0, 0, 0, 0.25);
    }
    li.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper:hover {
      background: transparent;
    }
    .ant-select-tree-dropdown {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-tree-dropdown .ant-select-dropdown-search .ant-select-search__field {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .ant-select-tree-dropdown .ant-select-not-found {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-tree-checkbox {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,
    .ant-tree-checkbox:hover .ant-tree-checkbox-inner,
    .ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {
      border-color: ${primaryColor};
    }
    .ant-tree-checkbox-checked:after {
      border-radius: 2px;
      border: 1px solid ${primaryColor};
    }
    .ant-tree-checkbox-inner {
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      background-color: #fff;
    }
    .ant-tree-checkbox-inner:after {
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }
    .ant-tree-checkbox-indeterminate.ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {
      border-color: rgba(0, 0, 0, 0.25);
    }
    .ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }
    .ant-tree-checkbox-checked .ant-tree-checkbox-inner,
    .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner {
      background-color: ${primaryColor};
      border-color: ${primaryColor};
    }
    .ant-tree-checkbox-disabled.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {
      border-color: rgba(0, 0, 0, 0.25);
    }
    .ant-tree-checkbox-disabled .ant-tree-checkbox-inner {
      border-color: #d9d9d9 !important;
      background-color: #f5f5f5;
    }
    .ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {
      border-color: #f5f5f5;
    }
    .ant-tree-checkbox-disabled + span {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-tree-checkbox-wrapper {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tree-checkbox-group {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tree {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tree li span[draggable],
    .ant-tree li span[draggable="true"] {
      border-top: 2px transparent solid;
      border-bottom: 2px transparent solid;
    }
    .ant-tree li.drag-over > span[draggable] {
      background-color: ${primaryColor};
      color: white;
    }
    .ant-tree li.drag-over-gap-top > span[draggable] {
      border-top-color: ${primaryColor};
    }
    .ant-tree li.drag-over-gap-bottom > span[draggable] {
      border-bottom-color: ${primaryColor};
    }
    .ant-tree li.filter-node > span {
      color: #f5222d !important;
    }
    .ant-tree li .ant-tree-node-content-wrapper {
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-tree li .ant-tree-node-content-wrapper:hover {
      background-color: #f9f0ff;
    }
    .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
      background-color: #efdbff;
    }
    .ant-tree li span.ant-tree-switcher,
    .ant-tree li span.ant-tree-iconEle {
      border: 0 none;
    }
    .ant-tree li span.ant-tree-icon_loading {
      background: #fff;
    }
    .ant-tree li span.ant-tree-icon_loading:after {
      color: ${primaryColor};
    }
    li.ant-tree-treenode-disabled > span,
    li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper,
    li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper span,
    li.ant-tree-treenode-disabled > span.ant-tree-switcher {
      color: rgba(0, 0, 0, 0.25);
    }
    li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper:hover {
      background: transparent;
    }
    .ant-tree.ant-tree-show-line li span.ant-tree-switcher {
      background: #fff;
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-tree.ant-tree-show-line li:not(:last-child):before {
      border-left: 1px solid #d9d9d9;
    }
    .ant-upload {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-upload.ant-upload-select-picture-card {
      border: 1px dashed #d9d9d9;
      border-radius: 4px;
      background-color: #fafafa;
    }
    .ant-upload.ant-upload-select-picture-card:hover {
      border-color: ${primaryColor};
    }
    .ant-upload.ant-upload-drag {
      border: 1px dashed #d9d9d9;
      border-radius: 4px;
      background: #fafafa;
    }
    .ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
      border: 2px dashed ${hoverColor};
    }
    .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
      border-color: ${hoverColor};
    }
    .ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {
      color: ${hoverColor};
    }
    .ant-upload.ant-upload-drag p.ant-upload-text {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-upload.ant-upload-drag p.ant-upload-hint {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-upload.ant-upload-drag .anticon-plus {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-upload.ant-upload-drag .anticon-plus:hover {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-upload.ant-upload-drag:hover .anticon-plus {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-upload-list {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-upload-list-item-info .anticon-loading,
    .ant-upload-list-item-info .anticon-paper-clip {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-upload-list-item .anticon-cross {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-upload-list-item .anticon-cross:hover {
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-upload-list-item:hover .ant-upload-list-item-info {
      background-color: #f9f0ff;
    }
    .ant-upload-list-item-error,
    .ant-upload-list-item-error .anticon-paper-clip,
    .ant-upload-list-item-error .ant-upload-list-item-name {
      color: #f5222d;
    }
    .ant-upload-list-item-error .anticon-cross {
      color: #f5222d !important;
    }
    .ant-upload-list-picture .ant-upload-list-item,
    .ant-upload-list-picture-card .ant-upload-list-item {
      border-radius: 4px;
      border: 1px solid #d9d9d9;
    }
    .ant-upload-list-picture .ant-upload-list-item:hover,
    .ant-upload-list-picture-card .ant-upload-list-item:hover {
      background: transparent;
    }
    .ant-upload-list-picture .ant-upload-list-item-error,
    .ant-upload-list-picture-card .ant-upload-list-item-error {
      border-color: #f5222d;
    }
    .ant-upload-list-picture .ant-upload-list-item:hover .ant-upload-list-item-info,
    .ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info {
      background: transparent;
    }
    .ant-upload-list-picture .ant-upload-list-item-uploading,
    .ant-upload-list-picture-card .ant-upload-list-item-uploading {
      border-style: dashed;
    }
    .ant-upload-list-picture .ant-upload-list-item-thumbnail.anticon:before,
    .ant-upload-list-picture-card .ant-upload-list-item-thumbnail.anticon:before {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-upload-list-picture-card .ant-upload-list-item-info:before {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye-o,
    .ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete {
      color: rgba(255, 255, 255, 0.85);
    }
    .ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye-o:hover,
    .ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete:hover {
      color: #fff;
    }
    .ant-upload-list-picture-card .ant-upload-list-item-uploading.ant-upload-list-item {
      background-color: #fafafa;
    }
    .ant-upload-list-picture-card .ant-upload-list-item-uploading-text {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-upload-list .ant-upload-success-icon {
      color: #52c41a;
    }
    body {
      color: #314659;
      background: #fff;
    }
    .main-wrapper {
      background: #fff;
    }
    .main-container {
      background: #fff;
      border-left: 1px solid #ebedf0;
    }
    .aside-container a[disabled] {
      color: #ccc;
    }
    .aside-container .menu-item-link-outside .anticon {
      color: ${primaryColor};
    }
    .outside-link:after {
      color: #aaa;
    }
    .menu-site .ant-menu-item > a {
      color: #314659;
    }
    .menu-site .ant-menu-item-selected > a,
    .menu-site .ant-menu-item > a:hover {
      color: ${primaryColor};
    }
    /* #header {
      background: #fff;
      box-shadow: 0 2px 8px #f0f1f2;
    }
    #header.home-nav-bottom {
      background: rgba(255, 255, 255, 0.9);
      border-bottom-color: #ebedee;
    }
    #header.home-nav-bottom .search {
      border-left-color: #ebedee;
    }
    #header.home-nav-bottom a {
      color: #314659;
    }
    #header .header-link {
      color: #314659;
    }
    #header .ant-menu-item-active .header-link {
      color: ${primaryColor};
    } */
    #search-box {
      border-left: 1px solid #ebedf0;
    }
    #search-box .anticon {
      color: #ced4d9;
    }
    #search-box input {
      border: 0;
      box-shadow: none;
      background: transparent;
    }
    #search-box input::placeholder {
      color: #a3b1bf;
    }
    .header-lang-button {
      color: rgba(0, 0, 0, 0.65);
      border-color: #d9d9d9;
    }
    #nav {
      border: 0;
    }
    #nav.ant-menu-horizontal {
      border-bottom: none;
    }
    #nav.ant-menu-horizontal > .ant-menu-item {
      border-top: 2px solid transparent;
    }
    #nav.ant-menu-horizontal > .ant-menu-item:hover {
      border-top: 2px solid ${primaryColor};
      border-bottom: 2px solid transparent;
    }
    #nav.ant-menu-horizontal > .ant-menu-item-selected {
      border-top: 2px solid ${primaryColor};
      border-bottom: 2px solid transparent;
    }
    #nav.ant-menu-horizontal > .ant-menu-item-selected a {
      color: ${primaryColor};
    }
    .component-select.ant-select-dropdown {
      border: 0;
      border-radius: 0;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    }
    .component-select .ant-select-dropdown-menu-item {
      border-radius: 0 !important;
    }
    .component-select .ant-component-decs {
      color: #aaa;
    }
    footer {
      background-color: #000;
      color: rgba(255, 255, 255, 0.65);
      box-shadow: 0 1000px 0 1000px #fff;
    }
    footer .ant-row .footer-center > h2 > .anticon {
      color: #aaa;
    }
    footer .footer-wrap {
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
    footer .bottom-bar a {
      color: rgba(255, 255, 255, 0.65);
    }
    footer .bottom-bar a:hover {
      color: #fff;
    }
    footer a {
      color: rgba(255, 255, 255, 0.9);
    }
    footer h2 {
      color: #ffffff;
    }
    footer h2 > span {
      color: #ffffff;
    }
    .home-page-wrapper {
      color: #314659;
    }
    .home-page-wrapper .page h2 {
      color: #314659;
    }
    .banner-bg {
      background: #2f54eb;
    }
    .banner .text-wrapper {
      color: #0d1a26;
    }
    .banner .text-wrapper p {
      color: #314659;
    }
    .banner .banner-btn {
      border-radius: 100px;
      border: 1px solid #2f54eb;
    }
    .banner .banner-btn.components {
      background: #2f54eb;
      color: #fff;
    }
    .banner .banner-btn.language {
      color: #2f54eb;
    }
    .page1 {
      background: #2f54eb;
      background: linear-gradient(to bottom, #2f54eb 0%, #3a40d4 100%);
    }
    .page1 h2 {
      color: #fff !important;
    }
    .page1-block h3 {
      color: #fff;
    }
    .page1-block p {
      color: #fff;
    }
    .page1-block:hover .page1-image {
      box-shadow: 0 6px 10px rgba(5, 26, 180, 0.35);
    }
    .page1-image {
      background: #fff;
      border-radius: 100%;
    }
    .page2 {
      background: #eff3f6;
    }
    .page2-content {
      box-shadow: 0 12px 20px #d8e0e6;
      background: #2f54eb;
    }
    .page2-components {
      background: #2f54eb;
      color: #fff;
    }
    .page2-components h3 {
      color: #fff;
    }
    .page2-components .components-button-wrapper a {
      color: #fff;
    }
    .page2-product {
      background: #fff;
    }
    .page2-product .product-block {
      color: #314659;
    }
    .page2-product .product-block:last-child .block-text-wrapper {
      border-bottom: none;
    }
    .page2-product .product-block .block-text-wrapper {
      border-bottom: 1px solid #ebedf0;
    }
    .page2-product .product-block .block-text-wrapper .more {
      color: #2f54eb;
    }
    .page2-product .product-block:hover h4 {
      color: #2f54eb;
    }
    .page3-block a {
      color: #314659;
    }
    .page3-block:hover h3 {
      color: #2f54eb;
    }
    .new-version-video {
      background: #fbfbfb;
    }
    .new-version-video .vidoe-wrap {
      background: url('https://gw.alipayobjects.com/zos/rmsportal/gEeRuETmbpAYRaeilexm.jpg') repeat-x;
      background-size: cover;
    }
    .prev-next-nav {
      border-top: 1px solid #ebedf0;
    }
    .prev-next-nav > a.prev-page:before {
      color: #697b8c;
    }
    .prev-next-nav > a.prev-page:hover:before {
      color: ${primaryColor};
    }
    .prev-next-nav > .next-page:after {
      color: #697b8c;
    }
    .prev-next-nav > .next-page:hover:after {
      color: ${primaryColor};
    }
    .markdown {
      color: #314659;
    }
    .markdown p > img {
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    }
    .markdown h1 {
      color: #0d1a26;
    }
    .markdown h2,
    .markdown h3,
    .markdown h4,
    .markdown h5,
    .markdown h6 {
      color: #0d1a26;
    }
    .markdown hr {
      border: 0;
      background: #ebedf0;
    }
    .markdown code {
      background: #f2f4f5;
      border-radius: 3px;
      border: 1px solid #eee;
    }
    .markdown pre {
      border-radius: 2px;
      background: #f2f4f5;
    }
    .markdown pre code {
      border: none;
      background: #f2f4f5;
      color: #314659;
    }
    .markdown > table {
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid #ebedf0;
    }
    .markdown > table th {
      color: #5c6b77;
      background: rgba(0, 0, 0, 0.02);
    }
    .markdown > table th,
    .markdown > table td {
      border: 1px solid #ebedf0;
    }
    .markdown blockquote {
      color: #697b8c;
      border-left: 4px solid #ebedf0;
    }
    .markdown .waiting {
      color: #ccc;
    }
    .markdown a.edit-button i {
      color: #697b8c;
    }
    .markdown a.edit-button i:hover {
      color: ${primaryColor};
    }
    .grid-demo .demo-row,
    [id^="components-grid-demo-"] .demo-row,
    .grid-demo .code-box-demo .demo-row,
    [id^="components-grid-demo-"] .code-box-demo .demo-row {
      background-image: linear-gradient(90deg, #f5f5f5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #f5f5f5 8.33333333%, #f5f5f5 12.5%, transparent 12.5%, transparent 16.66666667%, #f5f5f5 16.66666667%, #f5f5f5 20.83333333%, transparent 20.83333333%, transparent 25%, #f5f5f5 25%, #f5f5f5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #f5f5f5 33.33333333%, #f5f5f5 37.5%, transparent 37.5%, transparent 41.66666667%, #f5f5f5 41.66666667%, #f5f5f5 45.83333333%, transparent 45.83333333%, transparent 50%, #f5f5f5 50%, #f5f5f5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #f5f5f5 58.33333333%, #f5f5f5 62.5%, transparent 62.5%, transparent 66.66666667%, #f5f5f5 66.66666667%, #f5f5f5 70.83333333%, transparent 70.83333333%, transparent 75%, #f5f5f5 75%, #f5f5f5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #f5f5f5 83.33333333%, #f5f5f5 87.5%, transparent 87.5%, transparent 91.66666667%, #f5f5f5 91.66666667%, #f5f5f5 95.83333333%, transparent 95.83333333%);
    }
    .grid-demo .ant-row-flex,
    [id^="components-grid-demo-"] .ant-row-flex,
    .grid-demo .code-box-demo .ant-row-flex,
    [id^="components-grid-demo-"] .code-box-demo .ant-row-flex {
      background: #f5f5f5;
    }
    .grid-demo .ant-row > div,
    [id^="components-grid-demo-"] .ant-row > div,
    .grid-demo .code-box-demo .ant-row > div,
    [id^="components-grid-demo-"] .code-box-demo .ant-row > div,
    .grid-demo .ant-row-flex > div,
    [id^="components-grid-demo-"] .ant-row-flex > div,
    .grid-demo .code-box-demo .ant-row-flex > div,
    [id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div {
      border-radius: 0;
      color: #fff;
    }
    .grid-demo .code-box-demo .ant-row > div:not(.gutter-row),
    [id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row),
    .grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row),
    [id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row) {
      background: #00a0e9;
    }
    .grid-demo .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
    [id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
    .grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1),
    [id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1) {
      background: rgba(0, 160, 233, 0.7);
    }
    .grid-demo .ant-row .demo-col,
    [id^="components-grid-demo-"] .ant-row .demo-col,
    .grid-demo .code-box-demo .ant-row .demo-col,
    [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col {
      color: #fff;
      border: none;
    }
    .grid-demo .ant-row .demo-col-1,
    [id^="components-grid-demo-"] .ant-row .demo-col-1,
    .grid-demo .ant-row .demo-col-1,
    [id^="components-grid-demo-"] .ant-row .demo-col-1 {
      background: rgba(0, 160, 233, 0.7);
    }
    .grid-demo .ant-row .demo-col-2,
    [id^="components-grid-demo-"] .ant-row .demo-col-2,
    .grid-demo .code-box-demo .ant-row .demo-col-2,
    [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-2 {
      background: rgba(0, 160, 233, 0.5);
    }
    .grid-demo .ant-row .demo-col-3,
    [id^="components-grid-demo-"] .ant-row .demo-col-3,
    .grid-demo .code-box-demo .ant-row .demo-col-3,
    [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-3 {
      background: rgba(255, 255, 255, 0.2);
      color: #999;
    }
    .grid-demo .ant-row .demo-col-4,
    [id^="components-grid-demo-"] .ant-row .demo-col-4,
    .grid-demo .code-box-demo .ant-row .demo-col-4,
    [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-4 {
      background: rgba(0, 160, 233, 0.6);
    }
    .grid-demo .ant-row .demo-col-5,
    [id^="components-grid-demo-"] .ant-row .demo-col-5,
    .grid-demo .code-box-demo .ant-row .demo-col-5,
    [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-5 {
      background: rgba(255, 255, 255, 0.5);
      color: #999;
    }
    .resource-card {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      color: #777;
    }
    .resource-card:hover {
      box-shadow: 0 3px 8px #d3ddeb;
      border-color: transparent;
    }
    .resource-card:hover .resource-card-title {
      color: ${primaryColor};
    }
    .resource-card-title {
      color: #314659;
    }
    .resource-card-description {
      color: #697b8c;
    }
    .preview-image-wrapper {
      background: #f2f4f5;
    }
    .preview-image-wrapper.video {
      background: 0;
    }
    .preview-image-wrapper.good:after {
      background: ${primaryColor};
    }
    .preview-image-wrapper.bad:after {
      background: #f5222d;
    }
    .preview-image-title {
      color: #314659;
    }
    .preview-image-description {
      color: #697b8c;
    }
    .preview-image-description hr {
      border: 0;
      background: none;
    }
    .preview-image-box img {
      background: #fff;
      border-radius: 4px;
    }
    .preview-image-box img.no-padding {
      background: none;
    }
    .preview-image-boxes.preview-image-boxes-with-carousel img {
      box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 #fff, 0 4px 0 0 #ddd, 0 6px 0 0 #fff, 0 7px 0 0 #ddd;
    }
    .preview-image-box img:hover {
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
    }
    .image-modal .ant-carousel .slick-dots li button {
      background: #888;
    }
    .toc {
      border-left: 1px solid #ebedf0;
    }
    .toc a {
      color: #314659;
      border-left: 1px solid transparent;
    }
    .toc a:hover {
      color: ${primaryColor};
    }
    .toc a.current {
      border-color: ${primaryColor};
      color: ${primaryColor};
    }
    .toc-affix .ant-affix {
      background: #fff;
    }
    .toc-affix-bottom .ant-affix {
      background: #fff;
    }
    #page-404 {
      background-image: url('https://os.alipayobjects.com/rmsportal/NOAjOBbnYCrNzrW.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: 100%;
    }
    #page-404 h1 {
      color: ${primaryColor};
    }
    #page-404 p {
      color: #314659;
    }
    pre code {
      background: white;
      color: #314659;
      border: 1px solid #e9e9e9;
      border-radius: 2px;
    }
    code[class*="language-"],
    pre[class*="language-"] {
      color: black;
      background: none;
    }
    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"] ::-moz-selection {
      background: #b3d4fc;
    }
    pre[class*="language-"]::selection,
    pre[class*="language-"] ::selection,
    code[class*="language-"]::selection,
    code[class*="language-"] ::selection {
      background: #b3d4fc;
    }
    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #f2f4f5;
    }
    :not(pre) > code[class*="language-"] {
      border-radius: .3em;
    }
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: slategray;
    }
    .token.punctuation {
      color: #999;
    }
    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #f81d22;
    }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #0b8235;
    }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: #0b8235;
    }
    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #008dff;
    }
    .token.function {
      color: #f81d22;
    }
    .token.regex,
    .token.important,
    .token.variable {
      color: #e90;
    }
    .code-box {
      border: 1px solid #ebedf0;
      border-radius: 2px;
    }
    .code-box:target {
      border: 1px solid ${primaryColor};
    }
    .code-box-expand-trigger {
      color: #9199ac;
    }
    .code-box-expand-trigger-active {
      color: #3b4357;
    }
    .code-box-title {
      color: #777;
      border-radius: 2px 2px 0 0;
      background: #fff;
    }
    .code-box-title a,
    .code-box-title a:hover {
      color: #314659;
    }
    .code-box a.edit-button {
      background: #fff;
    }
    .code-box-demo {
      border-bottom: 1px solid #ebedf0;
      color: rgba(0, 0, 0, 0.65);
    }
    .code-box iframe {
      border: 0;
    }
    .code-box-meta.markdown {
      border-radius: 0 0 2px 2px;
    }
    .code-box.expand .code-box-meta {
      border-radius: 0;
      border-bottom: 1px dashed #ebedf0;
    }
    .code-box .code-expand-icon-show,
    .code-box .code-expand-icon-hide {
      box-shadow: none;
    }
    .code-box .highlight-wrapper {
      border-radius: 0 0 2px 2px;
    }
    .code-box .highlight pre {
      background: #fff;
    }
    .code-box .highlight:not(:first-child) {
      border-top: 1px dashed #ebedf0;
    }
    .code-box-code-copy {
      color: #697b8c;
      background: #fff;
      border-radius: 20px;
    }
    .code-box-code-copy:hover {
      color: #697b8c;
    }
    .code-box-code-copy.anticon-check {
      color: #52c41a !important;
    }
    .code-box-codepen {
      background: transparent url("https://gw.alipayobjects.com/zos/rmsportal/OtZslpOjYXijshDERXwc.svg") center / 14px no-repeat;
      border: 0;
    }
    .code-box-riddle {
      background: transparent url("https://gw.alipayobjects.com/zos/rmsportal/DlHbxMCyeuyOrqOdbgik.svg") center / 14px no-repeat;
      border: 0;
    }
    .code-box-codesandbox {
      background: transparent url("https://gw.alipayobjects.com/zos/rmsportal/aaYmtdDyHSCkXyLZVgGK.svg") center / 14px no-repeat;
      border: 0;
    }
    .code-box pre code {
      border: none;
      background: #fff;
    }
    .main-color-item:first-child {
      border-radius: 4px 4px 0 0;
    }
    .main-color-item:last-child {
      border-radius: 0 0 4px 4px;
    }
    .main-color-item:hover {
      border-radius: 0 4px 4px 0;
    }
    .color-title {
      color: #5c6b77;
    }
    .color-description {
      color: #777;
    }
    .color-palette-horizontal .main-color-item {
      border-radius: 0;
    }
    .color-palette-horizontal .main-color-item:hover {
      border-radius: 4px 4px 0 0;
    }
    ul.anticons-list li {
      color: #555;
      border-radius: 4px;
      background-color: #fff;
    }
    ul.anticons-list li:hover {
      background-color: ${primaryColor};
      color: #fff;
    }
    ul.anticons-list li.copied:hover {
      color: rgba(255, 255, 255, 0.2);
    }
    ul.anticons-list li:after {
      color: #fff;
    }
    .browser-mockup {
      border-top: 2em solid rgba(230, 230, 230, 0.7);
      box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      border-radius: 3px 3px 0 0;
    }
    .browser-mockup:before {
      border-radius: 50%;
      background-color: #f44;
      box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
    }
    .browser-mockup.with-tab:after {
      border-bottom: 2em solid white;
      border-left: 0.8em solid transparent;
      border-right: 0.8em solid transparent;
    }
    .browser-mockup.with-url:after {
      border-radius: 2px;
      background-color: white;
    }
    .motion-example {
      color: #fff;
      border-radius: 8px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg) center / 180px;
    }
    .algolia-autocomplete .ds-dropdown-menu {
      border: none;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .algolia-autocomplete .ds-dropdown-menu [class^="ds-dataset-"] {
      border: none;
    }
    .algolia-autocomplete .algolia-docsearch-suggestion--title {
      color: #314659;
    }
    .algolia-autocomplete .algolia-docsearch-suggestion--highlight {
      color: ${primaryColor};
    }
`
}
