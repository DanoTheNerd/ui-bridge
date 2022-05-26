export const FooComponent = (props: {test: boolean}) => {
    console.log('props', props);
    return (
        <>
            <div classNames="foobar">bar {JSON.stringify(props)}</div>
        </>
    );
};