import React from 'react'
import PageMarketingSectionProspecteStc from './PageMarketingSectionProspecte.stc'
import Image from 'next/image';

function PageMarketingSectionProspecte(props) {

    return (
        <PageMarketingSectionProspecteStc className={props.className}>
            <Image src="/img/img5.png" alt="Signature d'un contrat stratégique" height="700" width="2000" className="d-none d-lg-block" />
        </PageMarketingSectionProspecteStc>
    )
}

export default PageMarketingSectionProspecte
