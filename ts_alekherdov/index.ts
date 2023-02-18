// type Config = {protocol: 'http' | 'https'; port: 3000 | 3001 };

interface Config {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface Role {
  role: string;
}

interface ConfigWithRole extends Config, Role {
  test: string
};

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3000,
  role: 'admin',
  test: 'testing...',
  log: (msg: string): void => console.log(msg)
}

type StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' => {
  console.log(`server started on ${protocol} and${port}`);
  return `Server started`;
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// По сути шаблон внутри шаблона

interface Styles {
  //указываем неопределенное кол-во свойств
  [key: string]: string  // каждое свойства = строка, значение тоже строка
}

const styles: Styles = {
  position: 'absolute',
  top: '20px',
  left: '50px',
  fontSize: '20rem',
}