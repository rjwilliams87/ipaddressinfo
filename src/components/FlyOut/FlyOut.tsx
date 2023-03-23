import React from 'react';

interface IFlyOutBaseProps {
  children: React.ReactNode;
}

interface IFlyOutListProps extends IFlyOutBaseProps {
  value: string;
}

interface IFlyOutComponent extends React.FC<IFlyOutBaseProps> {
  List: React.FC<IFlyOutBaseProps>;
  ListItem: React.FC<IFlyOutListProps>;
  Input: React.FC<any>;
}

interface IFlyOutContext {
  open: boolean;
  toggle: () => void;
  value: string;
  setValue: (value: string) => void;
}

const FlyOutContext = React.createContext<IFlyOutContext>({
  open: false,
  toggle: () => {},
  value: '',
  setValue: () => {},
});

const List: React.FC<IFlyOutBaseProps> = ({ children }) => {
  const { open } = React.useContext(FlyOutContext);

  return open ? <ul>{children}</ul> : null;
};

const ListItem: React.FC<IFlyOutListProps> = ({ children, value }) => {
  const { setValue } = React.useContext(FlyOutContext);

  return <li onMouseDown={() => setValue(value)}>{children}</li>;
};

const Input: React.FC<any> = (props) => {
  const { value, setValue, toggle } = React.useContext(FlyOutContext);

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return <input onFocus={toggle} onBlur={toggle} value={value} onChange={handleValue} {...props} />;
};

const FlyOut: IFlyOutComponent = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const toggle = React.useCallback(() => setOpen(!open), [open]);

  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      {children}
    </FlyOutContext.Provider>
  );
};

FlyOut.List = List;
FlyOut.ListItem = ListItem;
FlyOut.Input = Input;

export default FlyOut;
