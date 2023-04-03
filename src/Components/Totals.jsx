import { useContext } from 'react';
import { Global } from './GlobalContext';

const Totals = () => {
    const { list } = useContext(Global);

    return (
        <nav className="container mx-auto flex flex-col gap-y-12 items-center justify-between p-4">
            <div className="flex justify-between gap-y-2 gap-x-6  md:text-xl">
                <div className="flex flex-col items-center justify-between gap-y-2 md:gap-x-6">
                    <p className="pt-2 text-grey-600">
                        Clients Total: {list === null ? null : list.length}
                    </p>
                    <p className="pt-2 text-grey-600">
                        Cash Total:{' '}
                        {list
                            ?.map((item) => item.amount)
                            .reduce((acc, curr) => acc + curr, 0)}
                        {' $'}
                    </p>
                    <p className="pt-2 text-grey-600">
                        Cash Average:{' '}
                        {(
                            list
                                ?.map((item) => item.amount)
                                .reduce((acc, curr) => acc + curr, 0) /
                            list?.length
                        ).toFixed(2) ?? 0}
                        {' $'}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-between gap-y-2 md:gap-x-6">
                    <p className="pt-2 text-grey-600">
                        Debited Accounts:{' '}
                        {list?.filter((acc) => acc.amount > 0).length ?? 0}
                    </p>
                    <p className="pt-2 text-grey-600">
                        Empty Accounts:{' '}
                        {list?.filter((acc) => acc.amount === 0).length ?? 0}
                    </p>
                    <p className="pt-2 text-grey-600">
                        Credited Accounts:{' '}
                        {list?.filter((acc) => acc.amount < 0).length ?? 0}
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Totals;
