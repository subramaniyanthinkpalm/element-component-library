import React from 'react'
import { Button, Dropdown as APDropdown, Input, Form } from 'semantic-ui-react'
import './CSS/dropdown.css';

const Dropdown = (props) => {
    const { labelText="Select", options, iconType, search, color, calendar, openDropdown, dropdownHandle, inputHandle } = props;

    let minutes = [];
    for (let i = 1; i <= 60; i++) {
        minutes.push(i);
    }

    return (        
        <>
            {
                props.addtask ?
                    <APDropdown
                        labeled
                        text={labelText}
                        icon='plus circle'
                        className='icon ap_form_dropdown custom'
                        {...( openDropdown? { open: true } : {}) }
                    >
                        <APDropdown.Menu className={`${(props.large) ? 'large': ((props.medium) ? 'medium' :'small')}`}>
                            <Input icon='search' iconPosition='left' placeholder="Name Task" className='search' onClick={()=> inputHandle()}  />
                            {
                                props.title &&
                                <div className="ap_header">
                                    {
                                        props.title.map((titleText,index) => (
                                            <APDropdown.Header key={index} content={titleText.content} className={`${titleText.class}`} />
                                        ))
                                    }
                                </div>
                            }
                            
                            {
                                props.items.map((item,index) => {
                                    let iconsRender = (item.icon) ? item.icon : '';
                                    return (
                                        <APDropdown.Item key={index} text={ `${item.text}`} 
                                            icon={iconsRender}  />
                                        )
                                })
                            }
                        </APDropdown.Menu>
                    </APDropdown>
                :

                props.notification ?
                    <div className="ui dropdown ap_notification notification">
                        <div className="menu transition visible">
                            <div className="title">Notifications</div>
                            {
                                props.data.map(notify => (
                                    <div className="list">
                                        <p className="date_time">{notify.date}, {notify.time}</p>
                                        <p className="description">{notify.description} <span>{notify.taskname}</span></p>
                                    </div>
                                ))
                            }
                            <div className="view_more">View More</div>
                        </div>
                    </div>
                :
                    props.template ? 
                        <div className="ui dropdown ap_form_dropdown custom">
                            <div aria-atomic="true" aria-live="polite" role="alert" className="divider text" 
                                onClick={() => props.onClickEvent()}>
                                {props.labelText}
                            </div>
                            <i aria-hidden="true" className="plus circle icon" ></i>
                            {
                                props.templateOpen && (
                                    <div className="menu transition visible small">
                                        <div className="ui input ap_input grey">
                                            <input placeholder="Name Task" type="text" value={props.inputText}
                                                onChange={(e) => props.inputEvent(e) } autoFocus
                                            />
                                        </div>
                                        {
                                            props.showButton && (
                                                <div className="task_btns">
                                                    <button className="ui button cancel" onClick={props.cancelEvent}>
                                                        Cancel
                                                    </button>
                                                    <button className="ui button add" onClick={props.addEvent}>
                                                        Add Task
                                                    </button>
                                                </div>
                                        )}

                                        <div className="select_option">
                                            Or Select Task Template
                                        </div>
                                        <div className="ap_header">
                                            {
                                                props.title.map((header,index,) => (
                                                    <div key={index} className={`header ${
                                                            header.value === props.dropdownHeaderValue ? 'active' : ''
                                                        }`}
                                                        onClick={() => props.headerTemplateEvent( header.value)}
                                                    > 
                                                        {header.content}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        {
                                            props.title.find((item) => item.value === props.dropdownHeaderValue).items.map((headerContent,index) => (
                                                    <div role="option" className="item" key={index}
                                                        onClick={() => props.templateValueEvent(headerContent.value)}
                                                    >
                                                        <span className="text">{headerContent.text}</span>
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>
                                )}
                        </div>
                :
                    props.text ?
                        <APDropdown text={labelText} 
                            icon="angle down"  
                            className={`ap_custom_text_dropdown ${props.line ? 'line' :''}`}
                            {...( props.line ?  { options: options } : {} ) }  
                            onChange={props.dropdownHandle}
                        >
                            {
                                !props.line ?
                                    <APDropdown.Menu>
                                        {
                                            options && 
                                                options.map((item,index) => (
                                                    <APDropdown.Item text={item.text} key={index} onClick={()=>props.itemEvent(item.value)}/>
                                                ))
                                        }
                                    </APDropdown.Menu>
                                    : null
                            }
                            
                        </APDropdown>
                : 
                    props.color ? 
                        <div className="ap_form_dropdown color">
                            <div role="listbox" aria-expanded="false" className="ui button dropdown icon medium"
                                onClick={()=>props.openColorMenu()}
                            >
                                <div aria-atomic="true" aria-live="polite" role="alert" className="divider text">Please Select</div>
                                <i aria-hidden="true" className="angle down icon"></i>
                                {
                                    props.openDropdown &&
                                
                                        <div className="menu transition">
                                            {
                                                props.options.map(option => (
                                                    <div className={`field ap_dropdown_color ap_dropdown_color_${option.value} `} 
                                                        onClick={()=>props.itemEvent(option.value)}>
                                                        <div className="ui checked fitted checkbox">
                                                            <input className="hidden"  type="checkbox" value="" 
                                                                {...( option.value === props.selected ? {checked: true} :{})}
                                                                onChange={()=>props.itemEvent(option.value)}
                                                            />
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                          
                                        </div>
                                }
                            </div>
                        </div>
                :
                    props.customform ? 
                        <Form className={`ap_form_dropdown customform ${props.scroll ? 'scroll' : '' } ${props.minutes ? 'minutes' : ''}`}>
                        <Form.Field className={`${(props.large) ? 'large': ((props.medium) ? 'medium' :'small')}`}>
                            {  !props.nolabel && props.labelText && <label> { props.labelText } </label> }
                            <APDropdown
                                text={props.defaultText? props.defaultText : "Please Select"}
                                button
                                className={`icon ${(props.large) ? 'large': ((props.medium) ? 'medium' :'small')}`}
                                icon="angle down"
                                {...(props.openDropdownEvent ? {open:props.openDropdownEvent}: {})}
                            >
                                <APDropdown.Menu className={`${(props.large) ? 'large': ((props.medium) ? 'medium' :'small')}`}>        
                                    {
                                        props.minutes && minutes.length &&
                                            minutes.map((minute,index) => (
                                                <APDropdown.Item key={index} text={minute} onClick={()=>props.itemEvent(minute)}  />
                                            ))
                                            
                                    }                           
                                    {
                                        props.options &&
                                        props.options.map((item,index) => {
                                            let iconsRender = (item.icon) ? item.icon : '';
                                            return (
                                                <APDropdown.Item key={index} text={ `${item.text}`} 
                                                    icon={iconsRender}  
                                                    onClick={()=>props.itemEvent(item.value)}
                                                    />
                                                )
                                        })
                                    }
                                </APDropdown.Menu>
                                
                            </APDropdown>
                        </Form.Field>
                    </Form> 
                :
                    props.form ? 
                        <Form className="ap_form_dropdown form">
                            <Form.Field className={`${(props.large) ? 'large': ((props.medium) ? 'medium' :'small')}`}>
                                {  props.labelText && <label> { props.labelText } </label> }
                                <APDropdown
                                    text={props.defaultText? props.defaultText : "Please Select"}
                                    button
                                    className={`icon ${(props.large) ? 'large': ((props.medium) ? 'medium' :'small')}`}
                                    icon="angle down"
                                    {...(props.openDropdownEvent ? {open:props.openDropdownEvent}: {})}
                                >
                                    <APDropdown.Menu className={`${(props.large) ? 'large': ((props.medium) ? 'medium' :'small')}`}>
                                        {
                                            props.title &&
                                            <div className="ap_header">
                                                {
                                                    props.title.map((titleText,index) => (
                                                        <APDropdown.Header key={index} 
                                                            content={titleText.content} 
                                                            className={`${titleText.value === props.dropdownHeaderValue ? 'active' : ''}`} 
                                                            onClick={() => props.headerTemplateEvent(titleText.value)}
                                                            />
                                                    ))
                                                }
                                            </div>
                                        }
                                        
                                        {
                                            props.title.find((item) => item.value === props.dropdownHeaderValue).items.map((headerContent,index) => {
                                                return(
                                                    <APDropdown.Item key={index} text={ `${headerContent.text}`}
                                                        onClick={() => props.templateValueEvent(headerContent.value)}
                                                    />
                                                    )
                                                }
                                            )
                                            
                                               
                                            
                                        }
                                    </APDropdown.Menu>
                                </APDropdown>
                            </Form.Field>
                        </Form> 
                :
                    props.image ? 
                        <Button.Group 
                            className= {`
                                ${props.active ? 'active' : props.disabled ? 'disabled' : '' }
                                ${(props.icon || props.show) ? 'ap_icon_dropdown' : ((props.color) ? 'ap_custom_color_dropdown': 'ap_dropdown' )} 
                                ${(props.medium) ? 'medium': 'small'} 
                                ${(props.bg_white) ? 'bg_white' : ''} 
                                ${(props.type==='dots' || props.show) ? 'light_green' : ''}    
                                ${(calendar) ? 'calendar' : ''}
                                ${props.image? 'image' : props.input ? 'input':''}
                            `} >

                            <APDropdown
                                className={`button icon ${(props.show) ? 'remove_icon' : ''}`}
                                floating
                                trigger={<></>} 
                                open={true} 
                            >
                                <APDropdown.Menu>
                                    {
                                        props.input &&

                                            <Input icon='search' iconPosition='left' className='search ap_input grey' 
                                                value={props.inputText}
                                                onClick={()=>props.stayOpenEvent()}
                                                onChange={(e)=>props.inputEvent(e)}
                                                autoFocus
                                            />
                                    }
                                    {
                                        options.map((option) => (
                                            <APDropdown.Item key={option.value} {...option} onClick={()=>props.itemEvent(option.value)} />
                                        ))
                                    }
                                </APDropdown.Menu>

                            </APDropdown>

                        </Button.Group>
                :
                    props.custom ?
                        <Button.Group className={` ${ props.icon? 'ap_icon_dropdown' : 'ap_dropdown'} 
                            ${props.active ? 'active' : props.disabled ? 'disabled' : '' }
                            ${props.medium ? 'medium' : 'small'} ${props.filter ? 'sort_dropdown' : ''} `}
                        >
                            {labelText && <Button>{labelText}</Button>}

                            <APDropdown
                                className="button icon"
                                floating
                                trigger={<></>}
                                {...(props.openDropdown ? {open: props.openDropdown} : {})}
                            >
                            <APDropdown.Menu>
                                {
                                    options &&
                                        options.map((option, index) => {
                                            return(
                                                <APDropdown.Item
                                                    text={option.text}
                                                    key={index}
                                                    value={option.value}
                                                    onClick={props.dropdownHandle}
                                                    {...(option.icon
                                                        ? {icon: option.icon}
                                                        : {})}
                                                    className={` ${
                                                        option.active ? 'active' : ''
                                                    }`}
                                                />
                                            );
                                    })
                                }
                            </APDropdown.Menu>
                        </APDropdown>
                    </Button.Group>
                :
                    props.search ? 
                        <Button.Group 
                        className= {`
                            ${props.active ? 'active' : props.disabled ? 'disabled' : '' }
                            ${(props.icon || props.show) ? 'ap_icon_dropdown' : ((props.color) ? 'ap_custom_color_dropdown': 'ap_dropdown' )} 
                            ${(props.medium) ? 'medium': 'small'} 
                        `} 
                                onClick={props.onClickEvent}
                        >

                        {
                            labelText && <Button>{ labelText }</Button>
                        }

                    
                        <div role="listbox" aria-expanded="true" className="ui active visible floating dropdown button icon remove_icon" 
                            tabindex="0">
                            <i aria-hidden="true" className="dropdown icon"></i>
                            {
                                openDropdown &&
                                <div className="visible menu transition">
                                    <div className="ui left icon input search ap_input grey">
                                        <input type="text" value={props.inputText} onChange={(e)=>props.inputEvent(e)}/>
                                        <i aria-hidden="true" className="search icon"></i>
                                    </div>
                                    
                                    {
                                        props.options.map(option => (
                                            <div role="option" className={`${option.icon === 'check circle' ? 'selected' : ''} item`} 
                                                onClick={()=>props.itemEvent(option.value)}>
                                                <i aria-hidden="true" className={`${option.icon} icon`}></i>
                                                <span className="text">{option.text}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    
                    </Button.Group> 
                :
                    <Button.Group 
                        className= {`
                            ${props.active ? 'active' : props.disabled ? 'disabled' : '' }
                            ${(props.icon || props.show) ? 'ap_icon_dropdown' : ((props.color) ? 'ap_custom_color_dropdown': 'ap_dropdown' )} 
                            ${(props.medium) ? 'medium': 'small'} 
                            ${(props.bg_white) ? 'bg_white' : ''} 
                            ${(props.type==='dots' || props.show) ? 'light_green' : ''}    
                            ${(calendar) ? 'calendar' : ''}
                        `} >

                        {
                            labelText && <Button>{ labelText }</Button>
                        }

                        <APDropdown
                            className={`button icon ${(props.show) ? 'remove_icon' : ''}`}
                            floating
                            trigger={<></>} 
                            onChange={props.dropdownHandle}
                            {...( search || color || props.image ? {} : { options: options } ) }   
                            {...( props.type? { icon: "ellipsis horizontal" } : {}) }   
                            {...( openDropdown || props.show ? { open: true } : {}) } 
                            {...(props.disabled) ? {disabled :true} : ''}
                        >
                        
                            {
                                search || calendar ?
                                    <APDropdown.Menu>
                                        {
                                            search &&  
                                            <Input icon='search' iconPosition='left' className='search ap_input grey' 
                                                value={props.inputText}
                                                onClick={()=>props.stayOpenEvent()}
                                                onChange={(e)=>props.inputEvent(e)}
                                                autoFocus
                                            />
                                           
                                        }
                                       
                                        {
                                            options && 
                                                options.map((option,index) => {
                                                    return(

                                                        (option.type !== 'undefined' && option.type === 'label') ? 
                                                            <APDropdown.Header content={option.text} />
                                                        :
                                                        <APDropdown.Item 
                                                            text={option.text} 
                                                            key={index} 
                                                            value={option.value}
                                                            onClick={dropdownHandle}
                                                            {...( option.icon? { icon: option.icon } : {}) }   
                                                            className={` ${(option.active) ? 'active' : ''}` }   
                                                        />
                                                    )
                                                    
                                                })
                                        }
                                    </APDropdown.Menu>
                                : 

                                color &&
                                    <APDropdown.Menu >
                                        {
                                            options &&
                                            options.map(color => {
                                                let checked1 = ( color.value === 'red' ? {checked: true} : '');
                                                return(
                                                    <div className={`field ap_dropdown_color ap_dropdown_color_${color.value}`}
                                                        onClick={()=>props.itemEvent(color.value)}>
                                                        <div className="ui checked fitted checkbox">
                                                            <input className="hidden" readonly="" type="checkbox" value="" 
                                                                {...checked1}  onChange={()=>props.itemEvent(color.value)}/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </APDropdown.Menu>   
                            }      
                            {/* </div>         */}
                        </APDropdown>
                    </Button.Group>
            }

        </>
    );
}

export default Dropdown;