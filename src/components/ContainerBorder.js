const ContainerBorder = ({ children, color, bold }) => {
  const containerBorderStyle = {
    width: '100%',
    height: '100%',
    border: '0.1rem solid',
    borderImageSource:
      'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1091" height="148" viewBox="0 0 1091 148" fill="none"%3E%3Cpath fill="' +
      `${color.replace('#', '%23')}` +
      '" d="M0 16h4v116H0zm1087 0h4v116h-4zM16 148v-4h1059v4zM16 4V0h1059v4zm-4 140v-4h4v4zm-4-4v-4h4v4zm-4-4v-4h4v4H4ZM12 4v4h4V4zM8 8v4h4V8zm-4 4v4h4v-4H4Zm1075-8v4h-4V4zm4 4v4h-4V8zm4 4v4h-4v-4h4Zm-8 132v-4h-4v4zm4-4v-4h-4v4zm4-4v-4h-4v4h4Z"/%3E%3C/svg%3E\')',
    borderImageSlice: 20,
    borderImageWidth: bold ? 20 : 10,
  };

  return <div style={containerBorderStyle}>{children}</div>;
};

export default ContainerBorder;
