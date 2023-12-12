import { Button,  Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,useDisclosure } from "@nextui-org/react"
import { useState } from "react";

function Matias(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
return(
<>
<Button color="primary" onPress={onOpen}>Clieckea que esperas, una invitacion?</Button>
<Modal isOpen={isOpen} onOpenChange={onOpenChange}classNames={{ body: "py-6", backdrop: "bg-[#292f46]/50 backdrop-opacity-40", base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#E4D4F4]", header: "border-b-[1px] border-[#292f46]", footer: "border-t-[1px] border-[#292f46]", closeButton: "hover:bg-white/5 active:bg-white/10", }}>  

<ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Al fiin, si que te tardaste</ModalHeader>
              <ModalBody>
                <p> 
                 Draxler, si la facultad lo permite.
                </p>
                <p>
                ¿Querrías ser mi co-asesor de tesis?
                </p>                
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="shadow" onPress={onClose}>
                  No wuacho, ta loco
                </Button>
                <Button color="primary" className="bg-[#F31260]" onPress={()=>{handleOpen(),onClose()}}>
                  Si acepto
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>   </Modal>
        <Modal isOpen={open} onOpenChange={handleOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Uf menos mal, porque no habia preparado modal para el otro</ModalHeader>
              <ModalBody>
                <p className="font-bold	"> 
                Hasta que la <span className="text-[#0E793C]" >tesis</span>  o la <span className="text-[#C20E4D]">muerte</span>  los separe.
                </p>                
              </ModalBody>
              <ModalFooter>               
                <Button color="primary" className="bg-[#180828]" onPress={handleClose}>
                  Puede codear con su amigo.
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>   </Modal>
</>
)
}
export default Matias