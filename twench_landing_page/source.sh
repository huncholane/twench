unset -f mc
unalias mc 2>/dev/null
mc() {
    local compname=$1
    if [[ ! -d "components" ]]; then
        echo -e "\033[0;32mCreating components directory\033[0m"
        mkdir components
    fi
    local compdir="components/$compname"
    if [[ ! -d "$compdir" ]]; then
        echo -e "\033[0;32mCreating $compdir directory\033[0m"
        mkdir $compdir
    fi
    local compindex="components/$compname/index.ts"
    if [[ ! -e "$compindex" ]]; then
        echo -e "\033[0;32mCreating $compindex\033[0m"
        echo "import $compname from './$compname';" > $compindex
        echo "export default $compname;" >> $compdir/index.ts
    fi
    local compstyle="components/$compname/$compname.css"
    if [[ ! -e "$compstyle" ]]; then
        echo -e "\033[0;32mCreating $compstyle\033[0m"
        echo ".$compname {" > $compstyle
        echo "}" >> $compstyle
    fi
    local compfile="components/$compname/$compname.tsx"
    if [[ ! -e "$compfile" ]]; then
        echo -e "\033[0;32mCreating $compfile\033[0m"
        echo "import React from 'react';" > $compfile
        echo "import './$compname.css';" >> $compfile
        echo "" >> $compfile
        echo "const $compname: React.FC = () => {" >> $compfile
        echo "  return (" >> $compfile
        echo "    <div className=\"$compname\">" >> $compfile
        echo "      $compname" >> $compfile
        echo "    </div>" >> $compfile
        echo "  );" >> $compfile
        echo "};" >> $compfile
        echo "" >> $compfile
        echo "export default $compname;" >> $compfile
    fi
}