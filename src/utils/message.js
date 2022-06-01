export const message = (type, message, duration = 1000) => {
  duration += 2000;

  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<p style="margin: 0">${message}</p>`;
  document.body.appendChild(messageElement);

  switch (type) {
    case 'error':
      messageElement.classList.add('alert-ctn', 'alert-error');
      break;

    case 'success':
      messageElement.classList.add('alert-ctn', 'alert-success');
      break;

    default:
      messageElement.classList.add('alert-ctn');
      break;
  }

  setTimeout(() => {
    messageElement.style.animationName = 'fadeupslow';
    setTimeout(() => {
      messageElement.remove();
    }, 500);
  }, duration);
};
