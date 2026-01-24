export const hooksData = [
  {
    id: 'useState',
    title: 'useState',
    description: 'useState is a Hook that lets you add React state to function components.',
    codeSnippet: `const [count, setCount] = useState(0);

// Update state
<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>`,
    docsLink: 'https://react.dev/reference/react/useState'
  },
  {
    id: 'useEffect',
    title: 'useEffect',
    description: 'useEffect lets you synchronize a component with an external system.',
    codeSnippet: `useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);`,
    docsLink: 'https://react.dev/reference/react/useEffect'
  },
  {
    id: 'useContext',
    title: 'useContext',
    description: 'useContext lets you read and subscribe to context from your component.',
    codeSnippet: `const theme = useContext(ThemeContext);`,
    docsLink: 'https://react.dev/reference/react/useContext'
  },
  {
    id: 'useRef',
    title: 'useRef',
    description: 'useRef is a React Hook that lets you reference a value that’s not needed for rendering.',
    codeSnippet: `const inputRef = useRef(null);

function handleClick() {
  inputRef.current.focus();
}`,
    docsLink: 'https://react.dev/reference/react/useRef'
  },
  {
    id: 'useMemo',
    title: 'useMemo',
    description: 'useMemo is a React Hook that lets you cache the result of a calculation between re-renders.',
    codeSnippet: `const visibleTodos = useMemo(
  () => filterTodos(todos, tab),
  [todos, tab]
);`,
    docsLink: 'https://react.dev/reference/react/useMemo'
  },
  {
    id: 'useCallback',
    title: 'useCallback',
    description: 'useCallback is a React Hook that lets you cache a function definition between re-renders.',
    codeSnippet: `const handleSubmit = useCallback((orderDetails) => {
  post('/product/' + productId + '/buy', {
    referrer,
    orderDetails,
  });
}, [productId, referrer]);`,
    docsLink: 'https://react.dev/reference/react/useCallback'
  }
];
