import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { toast } from "sonner"

const PagesNum = () => {
  return (
    <Pagination className="my-9">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={()=>toast.error("Not Enough Datasets!")} href="#" />
        </PaginationItem>
       
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={()=>toast.error("Not Enough Datasets!")} href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis onClick={()=>toast.error("Not Enough Datasets!")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={()=>toast.error("Not Enough Datasets!")} href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PagesNum