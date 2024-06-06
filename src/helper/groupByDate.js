export  function groupByDate(list) {
    return list.reduce((acc, curr) => {
        const date = new Date(curr.dt * 1000).toISOString().split('T')[0];
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(curr);
        return acc;
    }, {});
}