export const FooComponent = (props: {test: boolean}) => {
    return (
        <>
            <div classNames="foobar">bar {JSON.stringify(props)}</div>
        </>
    );
};
